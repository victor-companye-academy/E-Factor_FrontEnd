import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-skills-modal',
  templateUrl: './edit-profile-skills-modal.component.html',
  styleUrls: ['./edit-profile-skills-modal.component.scss']
})
export class EditProfileSkillsModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  constructor(private messageService: MessageService, private professionalService: ProfessionalService) { 
    
    this.professionalService.getSkillsList().subscribe(
      (res: any[]) => {
        this.skillsList = res;
      }
    )
  }

  protected editedProfile: any;
  protected searchText: string = '';
  protected filteredSkills: Array<any> = [];
  protected errMsg: string = '';
  protected isLoading: boolean = false;
  protected skillsToDelete: Array<any> = [];
  protected skillsList: Array<any> = [];

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    document.querySelector('.main')?.classList.add('blur-background');
  }

  onSubmit() {
    this.isLoading = true;
    this.professionalService.saveSkills(this.editedProfile.habilidades).subscribe(
      res => {
        this.professionalService.deleteSkills(this.skillsToDelete).subscribe(
          res => {            
            this.isLoading = false;        
            this.saveChanges.emit();
            document.querySelector('.main')?.classList.remove('blur-background');
          },
          error => {
            this.isLoading = false;
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível deletar as habilidades' });
          }
        )
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível salvar as habilidades' });
      }
    )
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  filterSkills() {
    if (!this.searchText) {
      this.filteredSkills = [];
      return;
    }

    this.filteredSkills = this.skillsList.filter(skill =>
      skill.habilidade.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

  getHighlightedText(skill: string): string {
    const index = skill.toLowerCase().indexOf(this.searchText.toLowerCase());
    if (index >= 0) {
      const prefix = skill.substring(0, index);
      const highlighted = skill.substring(index, index + this.searchText.length);
      const suffix = skill.substring(index + this.searchText.length);
      return `${prefix}<strong>${highlighted}</strong>${suffix}`;
    } else {
      return skill;
    }
  }

  addSkill(skill: any) {
    for (let i = 0; i < this.editedProfile.habilidades.length; i++) {
      if (this.editedProfile.habilidades[i].id === skill.id) {
        this.errMsg = "A habilidade escolhida já existe em sua lista de habilidades.";
        return;
      }
    }
    this.editedProfile.habilidades.push(skill);
    this.errMsg = '';
    this.searchText = '';
    this.filteredSkills = [];
  }

  deleteSkill(skill: any) {
    this.editedProfile.habilidades.splice(this.editedProfile.habilidades.indexOf(skill), 1);
    this.skillsToDelete.push(skill.id);
  }
}
