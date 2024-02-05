import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-experience-modal',
  templateUrl: './edit-profile-experience-modal.component.html',
  styleUrls: ['./edit-profile-experience-modal.component.scss']
})
export class EditProfileExperienceModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;
  protected isValid: boolean = true;
  protected isLoading: boolean = false;
  protected experiencesToDelete: Array<number> = [];
  protected experiencesToUpdate: Array<number> = [];

  constructor(private professionalService: ProfessionalService, private messageService: MessageService) { }

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    
    for (let i = 0; i < this.editedProfile.length; i++) {
      this.experiencesToUpdate.push(this.editedProfile[i]);
    }

    document.querySelector('.main')?.classList.add('blur-background');
  }

  onSubmit() {
    this.isLoading = true;
    for (let i = 0; i < this.editedProfile.length; i++) {
      if (this.editedProfile[i].dtFim == '') {
        this.editedProfile[i].dtFim = null;
      }
    }

    this.organizeExperience();

    let experiencesToAdd = this.editedProfile.filter((experience: { nrIdJornada: any; }) => !experience.nrIdJornada);

    this.professionalService.salvarJornada(experiencesToAdd).subscribe(
      res => {
        this.professionalService.removerJornada(this.experiencesToDelete).subscribe(
          res => {
            this.professionalService.atualizarJornada(this.experiencesToUpdate).subscribe(
              res => {                
                this.isLoading = false;
                this.saveChanges.emit();
                document.querySelector('.main')?.classList.remove('blur-background');
              },
              error => {
                this.isLoading = false;
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar experiência' });
              }
            );
          },
          error => {
            this.isLoading = false;
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao remover experiência' });
          }
        );
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar experiência' });
      }
    );
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  addExperience() {
    this.editedProfile.unshift({ dsInstituicao: '', dtInicio: '', dtFim: '', dsTitulo: '', dsResumo: '' , tpJornada: "Trabalho"});
    this.editedProfile = JSON.parse(JSON.stringify(this.editedProfile));
    this.isValid = false;
  }

  deleteExperience(i: number) {
    this.experiencesToDelete.push(this.editedProfile[i].nrIdJornada);
    this.editedProfile.splice(i, 1);
  }

  selectCurrent(i: number){
    if (this.editedProfile[i].dtFim != null) {
      this.editedProfile[i].dtFim = null;
    } else {
      this.editedProfile[i].dtFim = '';
    }
  }

  verifyExperience() {
    for (let i = 0; i < this.editedProfile.length; i++) {
      const experience = this.editedProfile[i];
      const { dsInstituicao, dtInicio, dsTitulo, dsResumo, dtFim } = experience;

      if (!dsInstituicao || !dtInicio || !dsTitulo || !dsResumo) {
        return this.isValid = false;
      }

      if (dtFim == '') {
        return this.isValid = false;
      } else if (dtFim) {
        if (new Date(dtInicio) > new Date(dtFim)) {
          return this.isValid = false;
        }
        if (new Date(dtFim) > new Date()) {
          return this.isValid = false;
        }
      }
      
      if (new Date(dtInicio) > new Date()) {
        return this.isValid = false;
      }
    }

    return this.isValid = true;
  }

  organizeExperience() {
    this.editedProfile.sort((a: any, b: any) => {
      if (a.dtFim == null && !b.dtFim == null) {
        return -1;
      } else if (!a.dtFim == null && b.dtFim == null) {
        return 1;
      } else {
        if (new Date(a.dtFim) > new Date(b.dtFim)) {
          return -1;
        } else if (new Date(a.dtFim) < new Date(b.dtFim)) {
          return 1;
        } else {
          if (new Date(a.dtInicio) > new Date(b.dtInicio)) {
            return -1;
          } else if (new Date(a.dtInicio) < new Date(b.dtInicio)) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    });
  }
}
