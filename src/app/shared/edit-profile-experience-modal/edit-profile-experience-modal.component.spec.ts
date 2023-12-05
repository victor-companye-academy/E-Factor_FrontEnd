import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileExperienceModalComponent } from './edit-profile-experience-modal.component';

describe('EditProfileExperienceModalComponent', () => {
  let component: EditProfileExperienceModalComponent;
  let fixture: ComponentFixture<EditProfileExperienceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileExperienceModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileExperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
