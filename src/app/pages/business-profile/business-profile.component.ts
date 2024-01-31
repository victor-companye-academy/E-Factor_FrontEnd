import { Component, HostListener } from '@angular/core';
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
  protected isCollapsed = window.innerWidth < 991;
  protected showCellphone = true;
  protected isEditInfoModalOpen = false;
  protected isEditAboutModalOpen = false;
  protected modalIndex: number = -1;

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private businessService: BusinessService) { }

  protected id = this.route.snapshot.paramMap.get('id')?.toString() || '';
  protected businessInfo = this.businessService.listBusiness().find(professional => professional.id === this.id);
  protected cardVacancy!: Array<Vacancy>;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.isCollapsed = window.innerWidth < 991;
  }

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
    if (this.businessInfo) {
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

    this.businessService.updateBusiness(this.businessInfo);
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }

  async initializeCardVacancy() {
    try {
      this.cardVacancy = await this.vacancyService.listVacanciesByBusiness(this.id);
    } catch (error) {
      console.error('Erro ao inicializar a lista de vagas por empresa:', error);
    }
  }

  async ngOnInit() {
    await this.initializeCardVacancy();
  }
}
