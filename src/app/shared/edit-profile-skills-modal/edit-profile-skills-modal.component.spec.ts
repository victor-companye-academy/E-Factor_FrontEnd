import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSkillsModalComponent } from './edit-profile-skills-modal.component';

describe('EditProfileSkillsModalComponent', () => {
  let component: EditProfileSkillsModalComponent;
  let fixture: ComponentFixture<EditProfileSkillsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileSkillsModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileSkillsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
