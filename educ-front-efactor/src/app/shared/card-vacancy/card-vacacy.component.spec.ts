import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVacacyComponent } from './card-vacacy.component';

describe('CardVacayComponent', () => {
  let component: CardVacacyComponent;
  let fixture: ComponentFixture<CardVacacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVacacyComponent]
    });
    fixture = TestBed.createComponent(CardVacacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
