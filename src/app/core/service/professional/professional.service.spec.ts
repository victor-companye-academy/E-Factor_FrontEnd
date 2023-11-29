import { TestBed } from '@angular/core/testing';

import { CardProfessionalService } from './professional.service';

describe('CardProfessionalService', () => {
  let service: CardProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
