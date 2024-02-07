import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-about-modal',
  templateUrl: './edit-profile-about-modal.component.html',
  styleUrls: ['./edit-profile-about-modal.component.scss']
})
export class EditProfileAboutModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;
  protected isValid: boolean = false;
  protected isLoading: boolean = false;

  constructor(private professionalService: ProfessionalService, private messageService: MessageService) { }

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.isLoading = true;
    this.professionalService.salvarDescricao(this.editedProfile.descricao).subscribe(
      res => {
        this.isLoading = false;
        this.saveChanges.emit();
        document.querySelector('.main')?.classList.remove('blur-background');
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar descricão' });
      }
    );
  }

  cancelEdit() {
    this.closeModal.emit(true);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }

  verifyAbout() {
    if (this.editedProfile.about == '') {
      return this.isValid = false;
      false;
    } else {
      return this.isValid = true;
    }
  }
}
