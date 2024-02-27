import { TestBed } from '@angular/core/testing';

import { ProfessionalGuardService } from './professional-guard.service';

describe('ProfessionalGuardService', () => {
  let service: ProfessionalGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
