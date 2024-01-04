import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-approve-solicitation-modal',
  templateUrl: './approve-solicitation-modal.component.html',
  styleUrls: ['./approve-solicitation-modal.component.scss']
})
export class ApproveSolicitationModalComponent {
  @Input() solicitation: any;
  @Input() approve: any;
  @Input() reject: any;
  @Output() confirmAction = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit() {
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    this.changeSolicitationStatus();
    this.confirmAction.emit(this.solicitation);
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

  changeSolicitationStatus() {
    if (this.approve) {
      this.solicitation.status = 'Aprovado';
      return;
    }
    if (this.reject) {
      this.solicitation.status = 'Reprovado';
      return;
    }
  }
}
