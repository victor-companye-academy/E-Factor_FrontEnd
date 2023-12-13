import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBussinesUserComponent } from './create-bussines-user.component';

describe('CreateBussinesUserComponent', () => {
  let component: CreateBussinesUserComponent;
  let fixture: ComponentFixture<CreateBussinesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBussinesUserComponent]
    });
    fixture = TestBed.createComponent(CreateBussinesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
