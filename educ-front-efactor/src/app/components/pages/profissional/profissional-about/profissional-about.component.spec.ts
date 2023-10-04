import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalAboutComponent } from './profissional-about.component';

describe('ProfissionalAboutComponent', () => {
  let component: ProfissionalAboutComponent;
  let fixture: ComponentFixture<ProfissionalAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfissionalAboutComponent]
    });
    fixture = TestBed.createComponent(ProfissionalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
