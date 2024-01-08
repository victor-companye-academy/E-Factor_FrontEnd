import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesCreatedComponent } from './vacancies-created.component';

describe('VacanciesCreatedComponent', () => {
  let component: VacanciesCreatedComponent;
  let fixture: ComponentFixture<VacanciesCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacanciesCreatedComponent]
    });
    fixture = TestBed.createComponent(VacanciesCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
