import { TestBed } from '@angular/core/testing';

import { CoinSolicitationsService } from './coin-solicitations.service';

describe('CoinSolicitationsService', () => {
  let service: CoinSolicitationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinSolicitationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
