import { Component } from '@angular/core';
import { BusinessInfo } from 'src/app/core/interfaces/business-info';
import { CardVacancy } from 'src/app/core/interfaces/card-vacancy';
import { CardVacancyService } from 'src/app/core/service/cardVacancy/card-vacancy.service';

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

  constructor (private cardVacancyService: CardVacancyService) { }
  
  protected cardVacancy: Array<CardVacancy> = this.cardVacancyService.listVacancies();

  protected businessInfo: Array<BusinessInfo> = [
    {
      id: "1",
      photo: 'assets/imgs/bradesco-photo.png',
      name: 'Banco Bradesco S.A',
      city: 'São Paulo',
      state: 'São Paulo',
      email: 'bradesco@email.com',
      cellphone: '(11) 99123-4567',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti quo ipsum tempore illo. Perspiciatis eveniet, quasi architecto quidem suscipit odit! Assumenda asperiores facilis quam a consectetur blanditiis recusandae, laboriosam commodi ipsam optio deserunt quasi similique iure. Eveniet, doloribus? Tempora repudiandae in, veniam ab quasi voluptates alias quibusdam quia, fuga beatae quo, autem corrupti suscipit eius quis cum natus dolorum velit dicta accusamus explicabo! Quas rem dolorem perspiciatis consequuntur obcaecati quae esse? Sit hic voluptas minus in numquam alias odit corrupti, illo vel maxime doloremque unde optio ipsum placeat nihil velit natus non repellendus id, aliquam expedita. Dolorem, repellat a.',
    }
  ];

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
    switch (this.modalIndex) {
      case 0:
        this.businessInfo[0] = updatedProfile;
        break;
      case 1:
        this.businessInfo[0].about = updatedProfile;
        break;
    }
    this.modalIndex = -1;
    
    console.log('Perfil Atualizado:', updatedProfile);

    this.closeEditModal();
  }
}
