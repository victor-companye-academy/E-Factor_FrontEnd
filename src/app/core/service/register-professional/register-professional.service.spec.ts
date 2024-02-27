import { TestBed } from '@angular/core/testing';

import { RegisterProfessionalService } from './register-professional.service';

describe('RegisterProfessionalService', () => {
  let service: RegisterProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
