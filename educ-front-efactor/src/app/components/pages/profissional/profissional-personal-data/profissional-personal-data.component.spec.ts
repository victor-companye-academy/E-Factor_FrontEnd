import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalPersonalDataComponent } from './profissional-personal-data.component';

describe('ProfissionalPersonalDataComponent', () => {
  let component: ProfissionalPersonalDataComponent;
  let fixture: ComponentFixture<ProfissionalPersonalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfissionalPersonalDataComponent]
    });
    fixture = TestBed.createComponent(ProfissionalPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
