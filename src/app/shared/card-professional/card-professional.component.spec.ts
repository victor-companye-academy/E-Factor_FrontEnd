import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfessionalComponent } from './card-professional.component';

describe('CardProfessionalComponent', () => {
  let component: CardProfessionalComponent;
  let fixture: ComponentFixture<CardProfessionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProfessionalComponent]
    });
    fixture = TestBed.createComponent(CardProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
