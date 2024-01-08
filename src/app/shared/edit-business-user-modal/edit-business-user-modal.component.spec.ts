import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessUserModalComponent } from './edit-business-user-modal.component';

describe('EditBusinessUserModalComponent', () => {
  let component: EditBusinessUserModalComponent;
  let fixture: ComponentFixture<EditBusinessUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBusinessUserModalComponent]
    });
    fixture = TestBed.createComponent(EditBusinessUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
