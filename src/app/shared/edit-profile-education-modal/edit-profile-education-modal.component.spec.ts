import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileEducationModalComponent } from './edit-profile-education-modal.component';

describe('EditProfileEducationModalComponent', () => {
  let component: EditProfileEducationModalComponent;
  let fixture: ComponentFixture<EditProfileEducationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileEducationModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileEducationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
