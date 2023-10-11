import { TestBed } from '@angular/core/testing';

import { FindCepService } from './find-cep.service';

describe('FindCepService', () => {
  let service: FindCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
