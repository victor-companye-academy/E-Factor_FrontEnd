import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent {

  protected isLogged: boolean = true;
  protected showCellphone = true;

  constructor (private route: ActivatedRoute, private vacancyService: VacancyService, private professionalService: ProfessionalService) {}
  
  
  protected id = this.route.snapshot.paramMap.get('id');
  protected professionalInfo = this.professionalService.listProfessionals().find(professional => professional.id === this.id);
  protected cardVacancy: Array<Vacancy> = this.vacancyService.listVacancies();
  protected isEditInfoModalOpen = false;
  protected isEditAboutModalOpen = false;
  protected isEditExperienceModalOpen = false;
  protected isEditEducationModalOpen = false;
  protected isEditSkillsModalOpen = false;
  protected isEditLanguagesModalOpen = false;
  protected modalIndex: number = -1;

  openEditModal(index: number) {
    switch (index) {
      case 0:
        this.modalIndex = 0;
        this.isEditInfoModalOpen = true;
        break;
      case 1:
        this.modalIndex = 1;
        this.isEditAboutModalOpen = true;
        break;
      case 2:
        this.modalIndex = 2;
        this.isEditExperienceModalOpen = true;
        break;
      case 3:
        this.modalIndex = 3;
        this.isEditEducationModalOpen = true;
        break;
      case 4:
        this.modalIndex = 4;
        this.isEditSkillsModalOpen = true;
        break;
      case 5:
        this.modalIndex = 5;
        this.isEditLanguagesModalOpen = true;
        break;
    }
  }

  closeEditModal() {
    this.isEditInfoModalOpen = false;
    this.isEditAboutModalOpen = false;
    this.isEditExperienceModalOpen = false;
    this.isEditEducationModalOpen = false;
    this.isEditSkillsModalOpen = false;
    this.isEditLanguagesModalOpen = false;
  }

  saveProfileChanges(updatedProfile: any) {
    if (this.professionalInfo){
      switch (this.modalIndex) {
        case 0:
          this.professionalInfo = updatedProfile;
          break;
        case 1:
          this.professionalInfo.about = updatedProfile;
          break;
        case 2:
          this.professionalInfo.experience = updatedProfile;
          break;
        case 3:
          this.professionalInfo.education = updatedProfile;
          break;
        case 4:
          this.professionalInfo.skills = updatedProfile;
          break;
        case 5:
          this.professionalInfo.languages = updatedProfile;
          break;
      }
    }
    this.modalIndex = -1;
    
    this.professionalService.updateProfessional(this.professionalInfo);
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }

  getDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
}
