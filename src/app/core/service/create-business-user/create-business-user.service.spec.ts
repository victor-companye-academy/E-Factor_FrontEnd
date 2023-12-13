import { TestBed } from '@angular/core/testing';

import { CreateBusinessUserService } from './create-business-user.service';

describe('CreateBusinessUserService', () => {
  let service: CreateBusinessUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBusinessUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
