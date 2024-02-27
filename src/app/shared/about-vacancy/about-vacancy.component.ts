import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { UtilService } from 'src/app/core/service/util/util.service';
import { VacancyService } from 'src/app/core/service/vacancy/vacancy.service';

@Component({
  selector: 'about-vacancy',
  templateUrl: './about-vacancy.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./about-vacancy.component.scss']
})
export class AboutVacancyComponent {

  @Input({ alias: 'card' }) public card?: Vacancy;
  @Input() public showInterest!: boolean;

  protected isBusiness: boolean = false;
  protected isProfessional: boolean = false;
  protected isLoading: boolean = false;
  protected showInterested: boolean = false;
  protected interestedList: Array<any> = [];
  protected accepted: boolean = false;

  constructor(private messageService: MessageService, private vacancyService: VacancyService,
    private authService: AuthService, private utilService: UtilService, private confirmationService: ConfirmationService,
    private router: Router) {

    if (sessionStorage.getItem('accepted') === 'true') {
      this.accepted = true;
    }
  }

  ngOnChanges() {
    this.isProfessional = this.authService.isAuthenticated() && this.authService.getRole().includes('PROFISSIONAL');
    this.isBusiness = this.authService.isAuthenticated() && this.authService.getRole().includes('GESTOR');

    if (this.isBusiness && this.card) {
      this.utilService.businessId$.subscribe((id: number) => {
        this.isBusiness = id === this.card!.idEmpresa;
        this.vacancyService.returnInterestedsByVacancy(this.card!.idVaga!).subscribe(
          (res: any) => {
            this.interestedList = res;
          },
          error => {
          }
        )
      });
    }

    if (!this.card?.ativo) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Esta vaga foi encerrada' });
    }
  }

  onImageError(event: any) {
    event.target.src = 'assets/imgs/default-profile.svg'; // Define o src para a imagem padrão
  }

  assignInterest() {
    this.isLoading = true;
    if (this.authService.isAuthenticated() && this.authService.getRole().includes('PROFISSIONAL')) {
      this.vacancyService.assignInterest(this.card!.idVaga!).subscribe(
        res => {
          this.isLoading = false;
          this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Seu interesse na vaga foi registrado!' });
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível registrar o interesse na vaga: você já registrou interesse ou ocorreu um erro.' });
        }
      )
    }
  }

  toggleShowInterested() {
    this.showInterested = !this.showInterested;
  }

  navigateToProfessional(id: number) {
    this.router.navigate(['/professional-profile/', id]);
  }

  confirm() {
    if (this.accepted) {
      return;
    }

    this.confirmationService.confirm({
      header: 'Confirmação',
      message: 'Ao acessar o perfil de um profissional, você utilizará 1 Coin Factor. Deseja continuar?',
      accept: () => {
        this.accepted = true;
        sessionStorage.setItem('accepted', 'true');
      },
      reject: () => {
        this.accepted = false;
      }
    });
  }

  desactivateVacancy() {
    this.isLoading = true;
    if (this.authService.isAuthenticated() && this.authService.getRole().includes('GESTOR')){
      this.vacancyService.desactivateVacancy(this.card!.idVaga!).subscribe(
        res => {
          this.isLoading = false;
          this.messageService.add({ severity: 'info', summary: 'Informação', detail: 'Sua vaga foi desativada!' });
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível desativar sua vaga no momento' });
        }
      )
    }
  }
}
