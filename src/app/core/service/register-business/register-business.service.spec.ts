import { TestBed } from '@angular/core/testing';

import { RegisterBusinessService } from './register-business.service';

describe('RegisterBusinessService', () => {
  let service: RegisterBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
