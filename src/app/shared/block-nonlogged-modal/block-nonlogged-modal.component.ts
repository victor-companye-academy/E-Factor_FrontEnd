import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-block-nonlogged-modal',
  templateUrl: './block-nonlogged-modal.component.html',
  styleUrls: ['./block-nonlogged-modal.component.scss']
})
export class BlockNonloggedModalComponent {

  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit() {
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  closeNonLoggedModal() {
    this.closeModal.emit(true);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }
}
