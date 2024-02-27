import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInformationInputs } from 'src/app/core/interfaces/user-information-inputs';
import { RegisterBusinessService } from 'src/app/core/service/register-business/register-business.service';
import { RegisterProfessionalService } from 'src/app/core/service/register-professional/register-professional.service';

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
  protected errMsg: string = '';
  protected cpfValid: boolean = false;
  protected cnpjValid: boolean = false;
  protected emailValid: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private registerBusinessService: RegisterBusinessService, private registerProfessionalService: RegisterProfessionalService) {
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
          title: "Nome completo *",
          parameters: ['Nome completo', 'text', ''],
          value: '',
          select: []
        },
        {
          title: "CPF *",
          parameters: ['123.456.789-01', 'text', 'double-input-row'],
          value: '',
          select: []
        },
        {
          title: "Celular *",
          parameters: ['(00) 00000-0000', 'text', 'false'],
          value: '',
          select: []
        },
        {
          title: "Data de nascimento *",
          parameters: ['DD/MM/AAAA', 'date', ''],
          value: '',
          select: []
        },
        {
          title: "Nível de formação *",
          parameters: ['Selecione', 'text', 'select'],
          value: '',
          select: ['Fundamental', 'Médio incompleto', 'Médio', 'Superior incompleto', 'Superior completo']
        },
        {
          title: "Senioridade *",
          parameters: ['Selecione', 'text', 'select'],
          value: '',
          select: ['Estágio', 'Trainee', 'Júnior', 'Pleno', 'Sênior', "Especialista"]
        }
    ],
    [
      {
        title: "CNJP *",
        parameters: ['12.345.678/0001-90', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "Inscrição Estadual *",
        parameters: ['Sem pontuação', 'text', 'double-input-row'],
        value: '',
        select: []
      },      
      {
        title: "Telefone *",
        parameters: ['(00) 0000-0000', 'text', 'false'],
        value: '',
        select: []
      },
      {
        title: "Razão Social *",
        parameters: ['Ex: E-Factor', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "Nome Fantasia *",
        parameters: ['Ex: E-Factor', 'text', ''],
        value: '',
        select: []
      },
      {
        title: "E-mail *",
        parameters: ['efactor@email.com', 'email', ''],
        value: '',
        select: []
      },
    ],
  ];

  protected userAdressComponents: Array<any> = []

  populateUserInformations(){
    if (this.pageType == 0) {
      this.populatePersonalInformations();
    } else {
      this.populateBusinessInformations();
    }
    this.populateAdressComponents(this.userAdressComponents);
    this.getLinkDestinationContinue();
  }

  populatePersonalInformations(){
    this.registerProfessionalService.professionalInformations.nomeCompleto = this.arrayUserInformationInputs[this.pageType][0].value;
    this.registerProfessionalService.professionalInformations.cpf = this.arrayUserInformationInputs[this.pageType][1].value;
    this.registerProfessionalService.professionalInformations.contato.telefone = this.arrayUserInformationInputs[this.pageType][2].value;
    this.registerProfessionalService.professionalInformations.dataNascimento = this.arrayUserInformationInputs[this.pageType][3].value;
    this.registerProfessionalService.professionalInformations.nivel = this.arrayUserInformationInputs[this.pageType][5].value;
  }

  populateBusinessInformations(){
    this.registerBusinessService.businessInformations.cnpj = this.arrayUserInformationInputs[this.pageType][0].value;
    this.registerBusinessService.businessInformations.inscricaoEstadual = this.arrayUserInformationInputs[this.pageType][1].value;
    this.registerBusinessService.businessInformations.contato.telefone = this.arrayUserInformationInputs[this.pageType][2].value;
    this.registerBusinessService.businessInformations.razaoSocial = this.arrayUserInformationInputs[this.pageType][3].value;
    this.registerBusinessService.businessInformations.nomeFantasia = this.arrayUserInformationInputs[this.pageType][4].value;
    this.registerBusinessService.businessInformations.contato.email = this.arrayUserInformationInputs[this.pageType][5].value;
  }

  populateAdressComponents(adressComponents: any){
    this.userAdressComponents = adressComponents;

    if (this.pageType === 0) {
      this.registerProfessionalService.professionalInformations.endereco.cep = this.userAdressComponents[0].value;
      this.registerProfessionalService.professionalInformations.endereco.cidade = this.userAdressComponents[1].value;
      this.registerProfessionalService.professionalInformations.endereco.estado = this.userAdressComponents[2].value;
      this.registerProfessionalService.professionalInformations.endereco.bairro = this.userAdressComponents[3].value;
      this.registerProfessionalService.professionalInformations.endereco.logradouro = this.userAdressComponents[4].value;
      this.registerProfessionalService.professionalInformations.endereco.numero = parseInt(this.userAdressComponents[5].value);
      this.registerProfessionalService.professionalInformations.endereco.complemento = this.userAdressComponents[6].value;
    } else {
      this.registerBusinessService.businessInformations.endereco.cep = this.userAdressComponents[0].value;
      this.registerBusinessService.businessInformations.endereco.cidade = this.userAdressComponents[1].value;
      this.registerBusinessService.businessInformations.endereco.estado = this.userAdressComponents[2].value;
      this.registerBusinessService.businessInformations.endereco.bairro = this.userAdressComponents[3].value;
      this.registerBusinessService.businessInformations.endereco.logradouro = this.userAdressComponents[4].value;
      this.registerBusinessService.businessInformations.endereco.numero = parseInt(this.userAdressComponents[5].value);
      this.registerBusinessService.businessInformations.endereco.complemento = this.userAdressComponents[6].value;
    }
  }

  inputMasks(event: any, index: number) {
    const isPageTypeZero = this.pageType === 0;
    const isIndexOne = index === 1;
    const isIndexZero = index === 0;
    const isTelefoneOrCelular = this.arrayUserInformationInputs[this.pageType][index].title === 'Telefone *' || this.arrayUserInformationInputs[this.pageType][index].title === 'Celular *';
    
    if (isPageTypeZero && isIndexOne) {
      this.applyCpfMask(event, index);
    } else if (!isPageTypeZero && isIndexZero) {
      this.applyCnpjMask(event, index);
    }
    
    if (isTelefoneOrCelular) {
      this.applyPhoneMask(event, index);
    }
    
    this.verifyInputs(event, index);
  }

  validateValue(){
    if(this.pageType === 0){
      if (this.cpfValid && this.arrayUserInformationInputs[0][1].value != ''){
        this.errMsg = '';
      } else if (!this.cpfValid && this.arrayUserInformationInputs[0][1].value != '') {
        this.errMsg = "O CPF digitado é inválido";
      }
    } else {
      if (this.cnpjValid && this.arrayUserInformationInputs[1][0].value != ''){
        this.errMsg = this.arrayUserInformationInputs[this.pageType][5].value != '' && this.emailValid == false ? "O E-mail digitado é inválido" : '';
      } else if (!this.cnpjValid && this.arrayUserInformationInputs[1][0].value != '') {
        this.errMsg = "O CNPJ digitado é inválido";
      }
  
      if (this.emailValid && this.arrayUserInformationInputs[1][5].value != ''){
        this.errMsg = this.arrayUserInformationInputs[this.pageType][0].value != '' && this.cnpjValid == false ? "O CNPJ digitado é inválido" : '';
      } else if (!this.emailValid && this.arrayUserInformationInputs[1][5].value != '') {
        this.errMsg = "O E-mail digitado é inválido";
      }
    }
  }

  isCpfValid(index: number){
    let cpf = this.arrayUserInformationInputs[this.pageType][index].value;
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

  isCnpjValid(index: number){
    let cnpj = this.arrayUserInformationInputs[this.pageType][index].value;
    cnpj = cnpj.replace(/\D/g, '');

    if (cnpj.length !== 14) {
      return false;
    }

    let numbers = cnpj.substring(0, 12);
    const digits = cnpj.substring(12);
    let sum = 0;
    let position = 5;
  
    for (let i = 0; i < 12; i++) {
      sum += parseInt(numbers.charAt(i)) * position--;
      if (position < 2) {
        position = 9;
      }
    }
  
    const result1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    if (result1 !== parseInt(digits.charAt(0))) {
      return false;
    }
  
    numbers = cnpj.substring(0, 13);
    sum = 0;
    position = 6;
  
    for (let i = 0; i < 13; i++) {
      sum += parseInt(numbers.charAt(i)) * position--;
      if (position < 2) {
        position = 9;
      }
    }
  
    const result2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    if (result2 !== parseInt(digits.charAt(1))) {
      return false;
    }
  
    return true;
  }

  isEmailValid(index: number){
    let email = this.arrayUserInformationInputs[this.pageType][index].value;
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g)){
      return true;
    } else {
      return false;
    }
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

    if(this.pageType === 0){
      if (index === 1 && this.arrayUserInformationInputs[0][index].value != ''){
        this.cpfValid = this.isCpfValid(index);
      }
    } else {
      if (index === 0 && this.arrayUserInformationInputs[1][index].value != ''){
        this.cnpjValid = this.isCnpjValid(index);
      }
      if (index === 5 && this.arrayUserInformationInputs[1][index].value != ''){
        this.emailValid = this.isEmailValid(index);
      }
    }
  
    const activePage = this.arrayUserInformationInputs[this.pageType];
    let inputsFilled = activePage.every((input) => input.value !== '');

    if (inputsFilled && this.pageType == 0){
      this.cpfValid ? inputsFilled = true : inputsFilled = false;
    } else if (inputsFilled && this.pageType == 1){
      if (this.cnpjValid && this.emailValid){
        inputsFilled = true;
      } else {
        inputsFilled = false;
      }
    }
    
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

  getLinkDestinationContinue() {
    if (this.pageType == 0){
      this.router.navigate(['/biografia-profissional']);
    } else {
      this.router.navigate(['/biografia-empresa']);
    }
  }

  getLinkDestinationBack(){
    if (this.pageType == 0){
      this.router.navigate(['/criar-conta-profissional']);
    } else {
      this.router.navigate(['/selecionar-usuario']);
    }
  }

  formatSelectValue(input: string): string {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }
}
