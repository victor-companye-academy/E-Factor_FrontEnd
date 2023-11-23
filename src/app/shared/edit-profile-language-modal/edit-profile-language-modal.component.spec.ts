import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLanguageModalComponent } from './edit-profile-language-modal.component';

describe('EditProfileLanguageModalComponent', () => {
  let component: EditProfileLanguageModalComponent;
  let fixture: ComponentFixture<EditProfileLanguageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileLanguageModalComponent]
    });
    fixture = TestBed.createComponent(EditProfileLanguageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
