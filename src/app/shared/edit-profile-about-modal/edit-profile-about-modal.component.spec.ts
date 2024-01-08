import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAboutModalComponent } from './edit-profile-about-modal.component';

describe('EditProfileAboutModalComponent', () => {
  let component: EditProfileAboutModalComponent;
  let fixture: ComponentFixture<EditProfileAboutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileAboutModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileAboutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
