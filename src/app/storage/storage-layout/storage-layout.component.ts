import { Component, OnInit } from '@angular/core';
import { ListView } from 'src/app/shared/list-view/shared/list-view.model';

@Component({
  selector: 'app-storage-layout',
  templateUrl: './storage-layout.component.html',
  styleUrls: ['./storage-layout.component.css']
})
export class StorageLayoutComponent implements OnInit {

  constructor() { }
  listView = new ListView(
    'http://localhost:8081/records',
    [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'NAME' },
      { field: 'status', header: 'STATUS' },
      { field: 'snapshot', header: 'SNAPSHOT' },
      { field: 'filesystem', header: 'FILESYSTEM' },
      { field: 'size', header: 'SIZE' },
      { field: 'usage', header: 'USAGE' },
      { field: 'iopsr', header: 'IOPS/R' },
      { field: 'iopsw', header: 'IOPS/W' },
      { field: 'latencyr', header: 'LATENCY/R' },
      { field: 'latencyw', header: 'LATENCY/W' },
      { field: 'node', header: 'NODE' }
    ],
    [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'NAME' },
      { field: 'status', header: 'STATUS' },
      { field: 'snapshot', header: 'SNAPSHOT' },
      { field: 'filesystem', header: 'FILESYSTEM' },
      { field: 'size', header: 'SIZE' },
      { field: 'usage', header: 'USAGE' },
      { field: 'iopsr', header: 'IOPS/R' },
      { field: 'iopsw', header: 'IOPS/W' },
      { field: 'node', header: 'NODE' }
    ],
    'uuid',
    40, 3000
  );
  ngOnInit() {

  }
  listViewEditChange(value) {
    console.log(value);
  }
}
