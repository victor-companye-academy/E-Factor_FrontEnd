import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUserComponent } from './choose-user.component';

describe('ChooseUserComponent', () => {
  let component: ChooseUserComponent;
  let fixture: ComponentFixture<ChooseUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseUserComponent]
    });
    fixture = TestBed.createComponent(ChooseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
