import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent {

  
  constructor (private router: Router, private route: ActivatedRoute, private vacancyService: VacancyService, 
    private professionalService: ProfessionalService, private authService: AuthService, private messageService: MessageService) {

    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.isLogged = this.authService.isAuthenticated() && this.id == this.authService.getId();
    
    this.professionalInfo = this.professionalService.returnProfessional(this.id).subscribe(
      res => {
        this.professionalInfo = res;
        this.idade = new Date().getFullYear() - this.professionalInfo.dataNascimento.split("/")[2];
        
        this.experiencias = this.professionalInfo.jornadas.filter((jornada: { tpJornada: string; }) => jornada.tpJornada === 'Trabalho');
        this.formacoes = this.professionalInfo.jornadas.filter((jornada: { tpJornada: string; }) => jornada.tpJornada === 'FORMAÇÃO');

        this.professionalService.listInterestedVacancies().subscribe(
          res => {
            this.cardVacancy = res;
            this.isLoading = false;
          },
          error => {
            console.log(error);
            this.isLoading = false;
          }
        )
      },
      error => {
        console.log(error);
        this.profileNotFound = true;
        this.isLoading = false;
      }
    )

  }
      
  protected profileNotFound: boolean = false;
  protected isLogged: boolean = false;
  protected showCellphone = false;
  isLoading: boolean = false;
  
  protected id: number = 0;
  protected professionalInfo: any;
  protected cardVacancy: Array<Vacancy> = [];

  protected idade: number = 0;
  protected experiencias: Array<any> = [];
  protected formacoes: Array<any> = [];

  protected isEditInfoModalOpen = false;
  protected isEditAboutModalOpen = false;
  protected isEditExperienceModalOpen = false;
  protected isEditEducationModalOpen = false;
  protected isEditSkillsModalOpen = false;
  protected isEditLanguagesModalOpen = false;
  protected modalIndex: number = -1;

  protected visible: boolean = false;
  protected card: Vacancy = {} as Vacancy;

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
    this.reloadRoute();
  }

  saveProfileChanges() {
    let successMessage = '';
    if (this.professionalInfo){
      switch (this.modalIndex) {
        case 0:
          successMessage = 'Informações atualizadas com sucesso';
          break;
        case 1:
          successMessage = 'Sobre atualizado com sucesso';
          break;
        case 2:
          successMessage = 'Experiência atualizada com sucesso';
          break;
        case 3:
          successMessage = 'Formação atualizada com sucesso';
          break;
        case 4:
          successMessage = 'Habilidades atualizadas com sucesso';
          break;
        case 5:
          successMessage = 'Idiomas atualizados com sucesso';
          break;
      }
    }
            
    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: successMessage });
    }, 1000);
    
    this.modalIndex = -1;
    this.closeEditModal();
  }

  getDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  logout() {
    if (this.authService.isAuthenticated()) {
      this.authService.removeToken();
    }
    this.router.navigate(['/login']);
  }

  reloadRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onImageError(event: any) {
    event.target.src = 'assets/imgs/default-profile.svg'; // Define o src para a imagem padrão
  }

  protected showDialog(card: Vacancy) {
    this.card = card
    this.visible = true;
  }
}
