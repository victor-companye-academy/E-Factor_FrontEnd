import { TestBed } from '@angular/core/testing';

import { CardVacancyService } from './card-vacancy.service';

describe('CardVacancyService', () => {
  let service: CardVacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardVacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
