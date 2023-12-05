import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacancyDetailsComponent } from './create-vacancy-details.component';

describe('CreateVacancyDetailsComponent', () => {
  let component: CreateVacancyDetailsComponent;
  let fixture: ComponentFixture<CreateVacancyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVacancyDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateVacancyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
