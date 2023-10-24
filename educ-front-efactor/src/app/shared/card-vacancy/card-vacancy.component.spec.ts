import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVacancyComponent } from './card-vacancy.component';

describe('CardVacayComponent', () => {
  let component: CardVacancyComponent;
  let fixture: ComponentFixture<CardVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVacancyComponent]
    });
    fixture = TestBed.createComponent(CardVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
