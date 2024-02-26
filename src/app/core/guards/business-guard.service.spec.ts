import { TestBed } from '@angular/core/testing';

import { BusinessGuardService } from './business-guard.service';

describe('BusinessGuardService', () => {
  let service: BusinessGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
