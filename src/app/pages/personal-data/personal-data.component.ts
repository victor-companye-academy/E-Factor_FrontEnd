import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalDataInputs } from 'src/app/core/interfaces/personal-data-inputs';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  protected pageType: number = 1;
  protected path: string = '';
  protected showPassword: Array<boolean> = [false, false];
  protected input: Array<string> = ['', '', '', ''];
  protected isInputPasswordValid = false;
  protected elementoComErro: Array<number> = [-1, -1, -1, -1, -1];

  constructor(private route: ActivatedRoute) {
    this.path = this.route.snapshot.url[0].path;
    
    if (this.path === 'criar-conta-profissional') {
      this.pageType = 0;
    } else if (this.path === 'criar-conta-empresa') {
      this.pageType = 1;
    }
  }

  protected arrayPersonalDataInputs: Array<Array<PersonalDataInputs>> = [
      [
          {
            title: "E-mail",
            parameters: ['assets/icons/personal-data/email.svg', 'E-mail', 'text'],
            label: ''
          },
          {
            title: "Confirmação de e-mail",
            parameters: ['assets/icons/personal-data/email.svg', 'Confirmação de e-mail', 'text'],
            label: ''
          },
          {
            title: "Senha",
            parameters: ['assets/icons/personal-data/password.svg', 'Alterar visibilidade', 'password'],
            label: ''
          },
          {
            title: "Confirmação de senha",
            parameters: ['assets/icons/personal-data/password.svg', 'Alterar visibilidade', 'password'],
            label: ''
          },
          {
            title: "Profissional",
            parameters: ['assets/icons/personal-data/right-icon-profissional.svg', 'Um mundo de vagas ao seu alcance.', 'Encontre vagas de forma onde você se enquadra com a categoria de sua preferência.'],
            label: ''
          }
      ],
      [
        {
          title: "E-mail",
          parameters: ['assets/icons/personal-data/email.svg', 'E-mail', 'text'],
          label: ''
        },
        {
          title: "Confirmação de e-mail",
          parameters: ['assets/icons/personal-data/email.svg', 'Confirmação de e-mail', 'text'],
          label: ''
        },
        {
          title: "Senha",
          parameters: ['assets/icons/personal-data/password.svg', 'Alterar visibilidade', 'password'],
          label: ''
        },
        {
          title: "Confirmação de senha",
          parameters: ['assets/icons/personal-data/password.svg', 'Alterar visibilidade', 'password'],
          label: ''
        },
        {
          title: "Empresa",
          parameters: ['assets/icons/personal-data/right-icon-business.svg', 'Um mundo de profissionais ao seu alcance.', 'Encontre profissionais capacitados com a categoria de sua preferência.'],
          label: ''
        }
    ],
  ];

  public getLinkDestinationContinue() {
    if (this.pageType == 0){
      return '/informacoes-profissional';
    } else {
      return '/create-business-user';
    }
  }

  public getLinkDestinationBack() {
    if (this.pageType == 0){
      return '/selecionar-usuario';
    } else {
      return '/biografia-empresa';
    }
  }

  showPasswordToggle(i: number) {
    if (i != 2 && i != 3) {
      return;
    }
    this.showPassword[i - 2] = !this.showPassword[i - 2];
    if (this.showPassword[i - 2]){
      this.arrayPersonalDataInputs[this.pageType][i].parameters[0] = 'assets/icons/personal-data/password-show.svg';
      this.arrayPersonalDataInputs[this.pageType][i].parameters[2] = 'text';
    } else {
      this.arrayPersonalDataInputs[this.pageType][i].parameters[0] = 'assets/icons/personal-data/password.svg';
      this.arrayPersonalDataInputs[this.pageType][i].parameters[2] = 'password';
      
    }
  }

  isInputValid(event: any, i: number) {
    let value = event.target.value;
    this.input[i] = value;
    if (this.input[0].match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g) &&
        this.input[1].match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g) &&
        this.input[2] != '' &&
        this.input[3] != '' &&
        this.input[2] === this.input[3] &&
        this.input[0] === this.input[1])
    {
      return this.isInputPasswordValid = true;
    } else {
      return this.isInputPasswordValid = false;
    }
  }

  addErrorLabel(i: number) {
    this.validateEmailInput(i);
    this.validatePasswordInput();
  }

  validateEmailInput(i: number) {
    if (i === 0 || i === 1) {
      if (this.input[i] !== '' && !this.input[i].match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g)) {
        this.setErrorMessage(i, 'O e-mail informado é inválido');
      } else {
        this.clearErrorMessage(i);
        this.validadeEmailEquality();
      }
    }
  }
  
  validadeEmailEquality() {
    if (this.input[0] !== this.input[1] && this.input[0] !== '' && this.input[1] !== '') {
      // this.setErrorMessage(0, '');
      this.setErrorMessage(1, 'Os e-mails não conferem');
    } else if (this.input[0] !== '' && this.input[1] !== ''){
      this.clearErrorMessage(0);
      this.clearErrorMessage(1);
    }
  }
  
  validatePasswordInput() {
    if (this.input[2] !== this.input[3] && this.input[2] !== '' && this.input[3] !== '') {
      this.setErrorMessage(2, 'As senhas não conferem');
      this.setErrorMessage(3, 'As senhas não conferem');
    } else {
      this.clearErrorMessage(2);
      this.clearErrorMessage(3);
    }
  }
  
  setErrorMessage(i: number, message: string) {
    this.arrayPersonalDataInputs[this.pageType][i].label = message;
    this.elementoComErro[i] = i;
  }
  
  clearErrorMessage(i: number) {
    this.arrayPersonalDataInputs[this.pageType][i].label = '';
    this.elementoComErro[i] = -1;
  }
}