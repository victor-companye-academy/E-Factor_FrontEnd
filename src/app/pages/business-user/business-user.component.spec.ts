import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserComponent } from './business-user.component';

describe('BusinessUserComponent', () => {
  let component: BusinessUserComponent;
  let fixture: ComponentFixture<BusinessUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUserComponent]
    });
    fixture = TestBed.createComponent(BusinessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
