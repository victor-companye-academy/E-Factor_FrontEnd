import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCoinFactorComponent } from './request-coin-factor.component';

describe('RequestCoinFactorComponent', () => {
  let component: RequestCoinFactorComponent;
  let fixture: ComponentFixture<RequestCoinFactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestCoinFactorComponent]
    });
    fixture = TestBed.createComponent(RequestCoinFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
