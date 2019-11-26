import {
  Component, OnInit, Input, Output, EventEmitter, OnDestroy,
  AfterContentInit
} from '@angular/core';

import { LazyLoadEvent, MenuItem } from 'primeng/primeng';

import { ApiBaseService } from 'src/app/core/api-base.service';
import { ListView } from './shared/list-view.model';
import { interval, Subscription } from 'rxjs';
/**
 * features extracted from Primeng:
 * 1) context menu 2) crud 3)filter 4)edit for displaying icons in cell 5)export 6)scroll
 * 7) sort 8)toggle
 * @description
 * grid rows can undergo CUD when user scrolls, user filters and polling data.
 * @TODO
 * 1) after scrolling to ending position,
 * the lazyload function is called continuosly. This is reproduced quite rarely.
 * 2) columns added or removed from view are getting placed at the last.
 * 3) row expander and scroll don't work properly together
 * 4) sorting function needs to be fixed
 */
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() listView: ListView;
  // tslint:disable: no-output-on-prefix
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  // condition for grid is locked for updates
  isUserScrolling = false;
  isUserFiltering = false;
  isPolling = false;
  isGridUpdating = false;

  pollingSubscriber: Subscription;
  apiSubscriber: Subscription;

  oldEvent: LazyLoadEvent;
  gridData: any[];
  totalRecords = 0;
  selectedRow;
  items: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-search', command: (event) => this.editRow(event) },
    { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteRow(event) }
  ];
  columnViewItems: MenuItem[];
  constructor(private apiBaseService: ApiBaseService) { }
  ngOnInit() {
  }
  ngAfterContentInit() {
    this.oldEvent = { first: 0, rows: this.listView.pageSize };
    this.requestData(this.oldEvent, null, null, () => {
      this.releaseDataProcess();
    });
  }
  ngOnDestroy(): void {
    this.stopPolling();
  }

  editRow(row) {

  }
  deleteRow(row) {

  }

  startPolling() {
    this.stopPolling();
    this.pollingSubscriber = interval(this.listView.pollingInterval)
      .subscribe(() => {
        this.requestData(this.oldEvent, null, null, null);
      });
  }
  stopPolling() {
    if (this.pollingSubscriber && !this.pollingSubscriber.closed) {
      this.pollingSubscriber.unsubscribe();
    }
  }

  lockDataProcess() {
    this.stopPolling();
    this.rejectRequestForData();
  }
  releaseDataProcess() {
    this.startPolling();
  }
  onLazyLoad(event: LazyLoadEvent) {
    this.lockDataProcess();
    if (this.oldEvent && event.first === 0) {
      if (
        this.oldEvent.sortField !== event.sortField ||
        this.oldEvent.sortOrder !== event.sortOrder ||
        this.oldEvent.globalFilter !== event.globalFilter
      ) {
        this.totalRecords = 0;
      }
    }
    this.requestData(event, null, null, () => {
      this.releaseDataProcess();
      this.oldEvent = event;
    });
  }

  requestData(event: LazyLoadEvent, onSuccess?, onError?, onComplete?) {
    this.rejectRequestForData();
    const sortText = event.sortField ?
      (event.sortOrder === -1 ? `-${event.sortField}` : event.sortField) : '';
    const filterText = event.globalFilter ? event.globalFilter : '';
    this.apiSubscriber = this.apiBaseService.get(
      `${this.listView.api}?offset=${event.first}&pageSize=${this.listView.pageSize}&filter=${filterText}&sort=${sortText}`,
      event.first, this.listView.pageSize, filterText, sortText)
      .subscribe(result => {
        this.updateGrid(event, result);
        if (onSuccess) {
          onSuccess(result);
        }
      }, error => {
        if (onError) {
          onError(error);
        }
      }, () => {
        if (onComplete) {
          onComplete();
        }
      });
  }
  updateGrid(event: LazyLoadEvent, items) {
    const data = [];
    for (let i = 0; i < items.length; i++) {
      data[i] = items[i];
    }
    this.gridData = data;
    const currentTotal = event.first + event.rows;
    if (currentTotal > this.totalRecords) {
      if (event.rows > items.length) {
        this.totalRecords = event.first + items.length;
      } else {
        this.totalRecords = currentTotal + 1;
      }
    }
  }
  rejectRequestForData() {
    if (this.apiSubscriber && !this.apiSubscriber.closed) {
      this.apiSubscriber.unsubscribe();
    }
  }
}
