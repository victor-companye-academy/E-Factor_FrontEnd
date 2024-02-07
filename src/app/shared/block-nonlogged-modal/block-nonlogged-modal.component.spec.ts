import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNonloggedModalComponent } from './block-nonlogged-modal.component';

describe('BlockNonloggedModalComponent', () => {
  let component: BlockNonloggedModalComponent;
  let fixture: ComponentFixture<BlockNonloggedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockNonloggedModalComponent]
    });
    fixture = TestBed.createComponent(BlockNonloggedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
