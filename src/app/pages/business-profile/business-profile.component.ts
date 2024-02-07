import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/app/core/service/util/util.service';

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

  constructor (private router: Router, private vacancyService: VacancyService, private route: ActivatedRoute, private utilService: UtilService, 
    private businessService: BusinessService, private authService: AuthService, private messageService: MessageService) { 
    
    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.utilService.businessId$.subscribe((id: number) => {
      this.loggedId = id
    })
    this.isLogged = this.authService.isAuthenticated() && this.id == this.loggedId;

    this.businessService.returnBusiness().subscribe(
      (res: any) => {
        this.businessInfo = res.find((business: { id: number; }) => business.id === this.id);
        
        this.businessService.consultarSaldoCoin().subscribe(
          (res: any) => {
            this.isLoading = false;
            this.coins = res.saldoCoins;
          },
          error => {
            this.profileNotFound = true;
            this.isLoading = false;
            console.log(error);
          }
        )
      },
      error => {
        this.profileNotFound = true;
        this.isLoading = false;
        console.log(error);
      }
    )
  }
  
  protected profileNotFound: boolean = false;
  protected isLoading: boolean = false;
  protected id = 0;
  protected businessInfo: any;
  protected cardVacancy: Array<Vacancy> = this.vacancyService.listVacanciesByBusiness(this.id.toString()); //TODO
  protected coins: number = 0;
  protected loggedId: number = -1;

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
    this.reloadRoute();
  }

  saveProfileChanges(updatedProfile: any) {
    let successMessage = '';
    if (this.businessInfo){
      switch (this.modalIndex) {
        case 0:
          successMessage = 'Informações atualizadas com sucesso';
          break;
        case 1:
          successMessage = 'Sobre atualizado com sucesso';
          break;
      }
    }
            
    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: successMessage });
    }, 1000);
    
    this.modalIndex = -1;
    this.closeEditModal();
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
}
