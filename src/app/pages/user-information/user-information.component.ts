import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInformationInputs } from 'src/app/core/interfaces/user-information-inputs';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent {

  protected pageType = 0;
  protected path: string = '';
  protected title: string = '';
  protected isContinueBtnActive: boolean = false;
  protected addressComponentFilled = false;

  constructor(private route: ActivatedRoute) {
    this.path = this.route.snapshot.url[0].path;
    
    if (this.path === 'informacoes-profissional') {
      this.pageType = 0;
      this.title = 'Dados pessoais'
    } else if (this.path === 'informacoes-empresa') {
      this.pageType = 1;
      this.title = 'Dados jurídicos'
    }
  }

  protected arrayUserInformationInputs: Array<Array<UserInformationInputs>> = [
    [
      {
        title: "Nome completo",
          parameters: ['Nome completo', 'text', ''],
          value: '',
          select: []
        },
        {
          title: "CPF",
          parameters: ['123.456.789-01', 'text', 'double-input-row'],
          value: '',
          select: []
        },
        {
          title: "Celular",
          parameters: ['(00) 00000-0000', 'text', 'false'],
          value: '',
          select: []
        },
        {
          title: "Data de nascimento",
          parameters: ['DD/MM/AAAA', 'date', ''],
          value: '',
          select: []
        },
        {
          title: "Nível de formação",
          parameters: ['Selecione', 'text', 'select'],
          value: '',
          select: ['Fundamental', 'Médio incompleto', 'Médio', 'Superior incompleto', 'Superior completo']
        },
        {
          title: "Senioridade",
          parameters: ['Selecione', 'text', 'select'],
          value: '',
          select: ['Estagiário', 'Trainee', 'Júnior', 'Plano', 'Sênior']
        }
    ],
    [
      {
        title: "CNJP",
        parameters: ['12.345.678/0001-90', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "Inscrição Estadual",
        parameters: ['123456789', 'text', 'double-input-row'],
        value: '',
        select: []
      },      
      {
        title: "Telefone",
        parameters: ['(00) 0000-0000', 'text', 'false'],
        value: '',
        select: []
      },
      {
        title: "Razão Social",
        parameters: ['Ex: E-Factor', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "Nome Fantasia",
        parameters: ['Ex: E-Factor', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "E-mail",
        parameters: ['efactor@email.com', 'email', ''],
        value: '',
        select: []
      },
    ],
  ];

  inputMasks(event: any, index: number){
    if(this.pageType === 0){
      if (index === 1){
        this.applyCpfMask(event, index);
      }
    } else {
      if (index === 0){
        this.applyCnpjMask(event, index);
      }
    }

    if(this.arrayUserInformationInputs[this.pageType][index].title === ('Telefone') || this.arrayUserInformationInputs[this.pageType][index].title === ('Celular')){
      this.applyPhoneMask(event, index);
    }

    this.verifyInputs(event, index);
  }

  verifyInputs(event: any, index: number){
    let value = "";

    if (index !== -1){
      value = event.target.value;
    } else {
      this.addressComponentFilled = event;
    }

    if (this.pageType === 0){
      if(index != 1 && index != 2 && index != -1) {
        this.arrayUserInformationInputs[this.pageType][index].value = value;
      }
    } else if (this.pageType === 1 && index != -1) {
      if(index != 0 && index != 2) {
        this.arrayUserInformationInputs[this.pageType][index].value = value;
      }
    }
  
    const activePage = this.arrayUserInformationInputs[this.pageType];
    const inputsFilled = activePage.every((input) => input.value !== '');
    
    if (inputsFilled && this.addressComponentFilled) {
      this.isContinueBtnActive = true;
    } else {
      this.isContinueBtnActive = false;
    }
  }

  applyCnpjMask(event: any, index: number): void {
    const input = this.numberMask(event);
    
    let maskedValue = input.replace(/^(\d{2})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    maskedValue = maskedValue.replace(/\.(\d{3})(\d)/, '.$1/$2');
    maskedValue = maskedValue.replace(/(\d{4})(\d)/, '$1-$2');
  
    this.arrayUserInformationInputs[this.pageType][index].value = maskedValue;
  }

  applyCpfMask(event: any, index: number): void {
    const input = this.numberMask(event);
  
    let maskedValue = input.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
    this.arrayUserInformationInputs[this.pageType][index].value = maskedValue;
  }

  applyPhoneMask(event: any, index: number): void {
    const input = this.numberMask(event);

    let numericInput = input.replace(/[^0-9]/g, '');
  
    if (numericInput.length <= 10) {
      numericInput = numericInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      numericInput = numericInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    this.arrayUserInformationInputs[this.pageType][index].value = numericInput;
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9-]/g, '');
    return event.target.value;
  }
}
