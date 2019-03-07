import { TestBed } from '@angular/core/testing';

import { NgxAlertifyService } from './ngx-alertify.service';

describe('NgxAlertifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAlertifyService = TestBed.get(NgxAlertifyService);
    expect(service).toBeTruthy();
  });
});
