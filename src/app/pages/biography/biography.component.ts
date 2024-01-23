import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterBusinessService } from 'src/app/core/service/register-business/register-business.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private registerBusinessService: RegisterBusinessService, private messageService: MessageService) {
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
      this.router.navigate(['/login']);
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
    // TODO
  }

  registerUser(){
    this.isLoading = true;
    if(this.pageType == 0){  
      this.populateProfessionalBiography();  
      // TODO: Implementar cadastro de profissionais  
    } else {  
      this.populateBusinessBiography();    
      this.registerBusinessService.registerBusiness().subscribe(
        response => {
          this.isLoading = false;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Empresa cadastrada com sucesso' });
          this.registerBusinessService.response = response;
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
