import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-business-user-modal',
  templateUrl: './delete-business-user-modal.component.html',
  styleUrls: ['./delete-business-user-modal.component.scss']
})
export class DeleteBusinessUserModalComponent {
  @Input() user: any;
  @Output() confirmDelete = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit() {
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    this.confirmDelete.emit(this.user);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }

  cancelEdit() {
    this.closeModal.emit(true);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }
}
