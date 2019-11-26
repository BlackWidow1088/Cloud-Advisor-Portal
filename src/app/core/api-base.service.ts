import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { volumes } from './mockData';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(private httpClient: HttpClient) { }
  apiCntr = 0;
  get(api: string, offset: number, pageSize: number, filter: string, sort: string): Observable<any[]> {
    console.log('api fetched times ', this.apiCntr++);
    let data = volumes;
    for (let i = 0; i < 10; i++) {
      data = data.concat(volumes);
    }
    let rows = this.parseData(data);
    if (filter) {
      const columns = Object.keys(rows[0]);
      rows = rows.filter(row => this.filterField(row, columns, filter));
    }
    if (sort) {
      const sortString = sort[0] === '-' ? sort.substring(1) : sort;
      const descending = sort[0] === '-' ? -1 : 1;
      rows.sort((a, b) => this.compareField(a, b, sortString) * descending);
    }
    return of(rows.slice(offset, offset + pageSize));
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET'
    //   })
    // };
    // return this.httpClient.get(api, httpOptions);
  }
  filterField(row, columns, filter) {
    let isInFilter = false;
    let rowValue: string;
    for (let i = 0; i < columns.length; i++) {
      rowValue = row[columns[i]].toString().toLowerCase();
      if (rowValue.includes(filter.toLowerCase())) {
        isInFilter = true;
      }
    }
    return isInFilter;
  }

  compareField(rowA, rowB, field: string): number {
    if (rowA[field] === null) {
      return 1;
    }
    if (!isNaN(rowA[field])) {
      return rowA[field] > rowB[field] ? 1 : -1;
    }
    if (typeof rowA[field] === 'string') {
      return rowA[field].localeCompare(rowB[field]);
    }
  }

  parseData(data): any[] {
    let cntr = 0;
    return data.map(item => ({
      id: cntr++,
      uuid: item.uuid,
      name: item.name,
      status: item.status.state,
      locality: '',
      snapshot: Math.floor(Math.random() * Math.floor(3)),
      filesystem: '',
      size: (Math.floor(Math.random() * (1000 - 100) + 100) / 100) + ' GB',
      usage: (Math.floor(Math.random() * (1000 - 100) + 100) / 100) + ' GB',
      iopsr: '',
      iopsw: '',
      latencyr: 0,
      latencyw: 0,
      node: 'appserv1',
    }));
  }
}
