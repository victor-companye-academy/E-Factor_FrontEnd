import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancysListComponent } from './vacancys-list.component';

describe('VacancysListComponent', () => {
  let component: VacancysListComponent;
  let fixture: ComponentFixture<VacancysListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancysListComponent]
    });
    fixture = TestBed.createComponent(VacancysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
