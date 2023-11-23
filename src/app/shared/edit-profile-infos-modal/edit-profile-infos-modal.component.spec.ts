import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileInfosModalComponent } from './edit-profile-infos-modal.component';

describe('EditProfileInfosModalComponent', () => {
  let component: EditProfileInfosModalComponent;
  let fixture: ComponentFixture<EditProfileInfosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileInfosModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileInfosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
