import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-education-modal',
  templateUrl: './edit-profile-education-modal.component.html',
  styleUrls: ['./edit-profile-education-modal.component.scss']
})
export class EditProfileEducationModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;
  protected isValid: boolean = true;
  protected isLoading: boolean = false;
  protected educationsToDelete: Array<number> = [];
  protected educationsToUpdate: Array<number> = [];

  constructor(private professionalService: ProfessionalService, private messageService: MessageService) { }

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));

    for (let i = 0; i < this.editedProfile.length; i++) {
      this.educationsToUpdate.push(this.editedProfile[i]);
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

    this.organizeEducation();

    let educationToAdd = this.editedProfile.filter((education: { nrIdJornada: any; }) => !education.nrIdJornada);

    this.professionalService.salvarJornada(educationToAdd).subscribe(
      res => {
        this.professionalService.removerJornada(this.educationsToDelete).subscribe(
          res => {
            this.professionalService.atualizarJornada(this.educationsToUpdate).subscribe(
              res => {                
                this.isLoading = false;
                this.saveChanges.emit();
                document.querySelector('.main')?.classList.remove('blur-background');
              },
              error => {
                this.isLoading = false;
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar formação' });
              }
            );
          },
          error => {
            this.isLoading = false;
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao remover formação' });
          }
        );
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar formação' });
      }
    );
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  addEducation() {
    this.editedProfile.unshift({ dsInstituicao: '', dtInicio: '', dtFim: '', dsTitulo: '', dsResumo: '' , tpJornada: "FORMAÇÃO"});
    this.editedProfile = JSON.parse(JSON.stringify(this.editedProfile));
    this.isValid = false;
  }

  deleteEducation(i: number) {
    this.educationsToDelete.push(this.editedProfile[i].nrIdJornada);
    this.editedProfile.splice(i, 1);
  }

  selectCurrent(i: number){
    if (this.editedProfile[i].dtFim != null) {
      this.editedProfile[i].dtFim = null;
    } else {
      this.editedProfile[i].dtFim = '';
    }
  }

  verifyEducation() {
    for (let i = 0; i < this.editedProfile.length; i++) {
      const education = this.editedProfile[i];
      const { dsInstituicao, dtInicio, dsTitulo, dsResumo, dtFim } = education;

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

  organizeEducation() {
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
