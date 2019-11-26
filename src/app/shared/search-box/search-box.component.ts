import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
