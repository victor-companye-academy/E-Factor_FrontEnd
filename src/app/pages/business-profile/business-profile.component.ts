import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/app/core/service/util/util.service';
import { switchMap } from 'rxjs';

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

  constructor(private router: Router, private vacancyService: VacancyService, private route: ActivatedRoute, private utilService: UtilService, 
    private businessService: BusinessService, private authService: AuthService, private messageService: MessageService) { 
    
    this.isLoading = true;
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.utilService.businessId$.pipe(
      switchMap((id: number) => {
        this.loggedId = id;
        this.isLogged = this.authService.isAuthenticated() && this.id == this.loggedId;

        if (this.isLogged){
          return this.businessService.returnBusinessFromLoggedUser();
        } else {
          return this.businessService.returnBusinessById(this.id);
        }
      })
    ).subscribe(
      (res: any) => {
        this.businessInfo = res;
        this.coins = res.saldoCoins;
        
        if (this.isLogged){
          this.vacancyService.listVacanciesByLoggedBusiness().subscribe(
            (res: any) => {
              this.isLoading = false;
              this.cardVacancy = res;
            },
            error => {
              this.isLoading = false;
              console.log(error);
            }
          )
        } else {
          this.vacancyService.listVacanciesByBusiness(this.id)
          .then((res: any) => {
            this.isLoading = false;
            this.cardVacancy = res;
          })
          .catch(error => {
            this.isLoading = false;
            console.log(error);
          });
        }
          
      },
      error => {
        this.profileNotFound = true;
        this.isLoading = false;
        console.log(error);
      }
    );

    this.isGestorEmpresa = this.authService.getRole() == 'GESTOR_EMPRESA';
  }

  protected profileNotFound: boolean = false;
  protected isLoading: boolean = false;
  protected id = 0;
  protected businessInfo: any;
  protected cardVacancy!: Array<Vacancy>;
  protected coins: number = 0;
  protected loggedId: number = -1;
  protected isGestorEmpresa: boolean = false;

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
    if (this.businessInfo) {
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

  async initializeCardVacancy() {
    try {
      this.cardVacancy = await this.vacancyService.listVacanciesByBusiness(this.id);
    } catch (error) {
      console.error('Erro ao inicializar a lista de vagas por empresa:', error);
    }
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

  async ngOnInit() {
    await this.initializeCardVacancy();
  }

  onImageError(event: any) {
    event.target.src = 'assets/imgs/default-profile.svg'; // Define o src para a imagem padrão
  }
}
