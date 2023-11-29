import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent {

  protected isLogged: boolean = true;
  protected showCellphone = true;
  protected isEditInfoModalOpen = false;
  protected isEditAboutModalOpen = false;
  protected modalIndex: number = -1;

  constructor (private vacancyService: VacancyService, private route: ActivatedRoute, private businessService: BusinessService) { }
  
  protected id = this.route.snapshot.paramMap.get('id');
  protected businessInfo = this.businessService.listBusiness().find(professional => professional.id === this.id);
  protected cardVacancy: Array<Vacancy> = this.vacancyService.listVacancies();

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
    }
  }

  closeEditModal() {
    this.isEditInfoModalOpen = false;
    this.isEditAboutModalOpen = false;
  }

  saveProfileChanges(updatedProfile: any) {
    if (this.businessInfo){
      switch (this.modalIndex) {
        case 0:
          this.businessInfo = updatedProfile;
          break;
        case 1:
          this.businessInfo.about = updatedProfile;
          break;
      }
    }
    this.modalIndex = -1;
    
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }
}
