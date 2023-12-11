import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacancyCreateComponent } from './create-vacancy-create.component';

describe('CreateVacancyCreateComponent', () => {
  let component: CreateVacancyCreateComponent;
  let fixture: ComponentFixture<CreateVacancyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVacancyCreateComponent]
    });
    fixture = TestBed.createComponent(CreateVacancyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
