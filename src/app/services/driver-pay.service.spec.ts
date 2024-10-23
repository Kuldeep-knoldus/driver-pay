import { TestBed } from '@angular/core/testing';

import { DriverPayService } from './driver-pay.service';

describe('DriverPayService', () => {
  let service: DriverPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
