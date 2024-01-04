import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSolicitationModalComponent } from './approve-solicitation-modal.component';

describe('ApproveSolicitationModalComponent', () => {
  let component: ApproveSolicitationModalComponent;
  let fixture: ComponentFixture<ApproveSolicitationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveSolicitationModalComponent]
    });
    fixture = TestBed.createComponent(ApproveSolicitationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
