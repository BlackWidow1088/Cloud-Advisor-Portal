/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListViewService } from './list-view.service';

describe('Service: ListView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListViewService]
    });
  });

  it('should ...', inject([ListViewService], (service: ListViewService) => {
    expect(service).toBeTruthy();
  }));
});
