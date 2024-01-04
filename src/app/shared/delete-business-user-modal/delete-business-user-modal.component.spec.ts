import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBusinessUserModalComponent } from './delete-business-user-modal.component';

describe('DeleteBusinessUserModalComponent', () => {
  let component: DeleteBusinessUserModalComponent;
  let fixture: ComponentFixture<DeleteBusinessUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBusinessUserModalComponent]
    });
    fixture = TestBed.createComponent(DeleteBusinessUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
