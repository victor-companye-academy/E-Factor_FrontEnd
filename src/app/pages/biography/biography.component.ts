import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { RegisterBusinessService } from 'src/app/core/service/register-business/register-business.service';
import { RegisterProfessionalService } from 'src/app/core/service/register-professional/register-professional.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {

  protected pageType = 0;
  protected path: string = '';
  protected h2Text: string = '';
  protected biography: string = '';
  protected isBiographyValid: boolean = false;
  protected isLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private registerBusinessService: RegisterBusinessService,
    private messageService: MessageService, private registerProfessionalService: RegisterProfessionalService, private authService: AuthService) {

    this.path = this.route.snapshot.url[0].path;
    
    if (this.path === 'biografia-profissional') {
      this.pageType = 0;
      this.h2Text = 'Biografia';
    } else if (this.path === 'biografia-empresa') {
      this.h2Text = 'Sobre a empresa';
      this.pageType = 1;
    }
  }

  public setBiography(event: any){
    let value = event.target.value;
    this.biography = value;
    if (this.biography != ''){
      this.isBiographyValid = true;
    } else  {
      this.isBiographyValid = false;
    }
  }

  getLinkDestinationContinue() {
    if (this.pageType == 0){
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/criar-conta-empresa']);
    }
  }

  getLinkDestinationBack(){
    if (this.pageType == 0){
      this.router.navigate(['/informacoes-profissional']);
    } else {
      this.router.navigate(['/informacoes-empresa']);
    }
  }

  populateBusinessBiography(){
    this.registerBusinessService.businessInformations.sobre = this.biography;
  }

  populateProfessionalBiography(){
    this.registerProfessionalService.professionalInformations.descricaoPessoal = this.biography;
  }

  registerUser(){
    this.isLoading = true;
    if(this.pageType == 0){  
      this.populateProfessionalBiography();
      this.registerProfessionalService.executeRegister().subscribe(
        token => {
          this.isLoading = false;
          this.authService.setToken(token);
          this.getLinkDestinationContinue();
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao cadastrar o profissional, por favor, verifique os dados e tente novamente' });
        }
      );
    } else {  
      this.populateBusinessBiography();    
      this.registerBusinessService.registerBusiness().subscribe(
        response => {
          this.isLoading = false;
          sessionStorage.setItem('businessRegistrationResponse', JSON.stringify(response));
          this.getLinkDestinationContinue();
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao cadastrar a empresa, por favor, verifique os dados e tente novamente' });
        }
      )
    }
  }
}
