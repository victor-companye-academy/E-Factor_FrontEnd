import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BusinessUserInputs } from 'src/app/core/interfaces/business-user-inputs';
import { RegisterBusinessService } from 'src/app/core/service/register-business/register-business.service';

@Component({
  selector: 'app-business-user',
  templateUrl: './business-user.component.html',
  styleUrls: ['./business-user.component.scss']
})
export class BusinessUserComponent {
  
  protected isContinueBtnActive: boolean = false;
  protected errMsg: string = '';
  protected isLoading: boolean = false;

  protected arrayInputsBussinesUser: Array<BusinessUserInputs> = [
    {
      title: 'CPF *',
      parameters: ['text', '123.456.789-01'],
      value: ''
    },
    {
      title: 'Nome completo *',
      parameters: ['text', 'Nome completo'],
      value: ''
    },
    {
      title: 'Data de nascimento *',
      parameters: ['date', 'dd/mm/aaaa'],
      value: ''
    }
  ];

  constructor(private router: Router, private registerBusinessService: RegisterBusinessService, private messageService: MessageService) { }

  verifyInputs(event: any, index: number){
    let value = event.target.value;

    if (index === 0){
      this.applyCpfMask(event, index);
    } else if (index === 1){
      this.arrayInputsBussinesUser[1].value = value;
    } else if (index === 2){
      this.arrayInputsBussinesUser[2].value = value;
    }

    const arrayInputs = this.arrayInputsBussinesUser;
    let inputsFilled = arrayInputs.every((input) => input.value !== '');

    if(this.isCpfValid() && inputsFilled){
      this.isContinueBtnActive = true;
    } else {
      this.isContinueBtnActive = false;
    }
  }

  validateCpf(index: number){
    if (index === 0){
      !this.isCpfValid() && this.arrayInputsBussinesUser[index].value != '' ? this.errMsg = "O CPF digitado é inválido" : this.errMsg = '';
    }
  }

  isCpfValid(){
    let cpf = this.arrayInputsBussinesUser[0].value;
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return false;
    }
  
    let sum = 0;
    let remainder;
  
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
  
    return true;
  }

  applyCpfMask(event: any, index: number): void {
    const input = this.numberMask(event);
  
    let maskedValue = input.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
    this.arrayInputsBussinesUser[index].value = maskedValue;
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9-]/g, '');
    return event.target.value;
  }

  getLinkDestinationContinue(){
    this.router.navigate(['/login']);
  }

  populateManagerInformations(){
    this.registerBusinessService.managerInformations.cpf = this.arrayInputsBussinesUser[0].value;
    this.registerBusinessService.managerInformations.nome = this.arrayInputsBussinesUser[1].value;
    this.registerBusinessService.managerInformations.dataNascimento = this.arrayInputsBussinesUser[2].value;

    this.createBusinessManager();
  }

  createBusinessManager() {
    this.isLoading = true;
    this.registerBusinessService.registerManager().subscribe(
      response => {
        console.log(response);
        this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Usuário cadastrado com sucesso!'});
        this.isLoading = false;
        this.getLinkDestinationContinue();
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Ocorreu um erro ao cadastrar o usuário. Por favor, verifique os dados e tente novamente.'});
        console.log(error);
        this.isLoading = false;
      }
    )
  }
}
