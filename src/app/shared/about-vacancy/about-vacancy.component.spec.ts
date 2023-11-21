import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVacancyComponent } from './about-vacancy.component';

describe('AboutVacancyComponent', () => {
  let component: AboutVacancyComponent;
  let fixture: ComponentFixture<AboutVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutVacancyComponent]
    });
    fixture = TestBed.createComponent(AboutVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
