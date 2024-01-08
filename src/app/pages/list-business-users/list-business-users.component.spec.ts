import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusinessUsersComponent } from './list-business-users.component';

describe('ListBusinessUsersComponent', () => {
  let component: ListBusinessUsersComponent;
  let fixture: ComponentFixture<ListBusinessUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBusinessUsersComponent]
    });
    fixture = TestBed.createComponent(ListBusinessUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
