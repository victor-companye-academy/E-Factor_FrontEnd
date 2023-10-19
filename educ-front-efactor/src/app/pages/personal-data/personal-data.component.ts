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
            title: "Nome completo",
            parameters: ['assets/icons/personal-data/name.svg', 'Nome completo', 'text'],
            label: ''
          },
          {
            title: "Email",
            parameters: ['assets/icons/personal-data/email.svg', 'Email', 'text'],
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
            parameters: ['assets/icons/personal-data/right-icon-profissional.svg', 'Um mundo de vagas ao seu alcance.', 'Encontre vagas da forma onde você se enquada com a categoria de sua preferência.'],
            label: ''
          }
      ],
      [
        {
          title: "Nome jurídico",
          parameters: ['assets/icons/personal-data/name.svg', 'Nome completo', 'text'],
          label: ''
        },
        {
          title: "Email profissional",
          parameters: ['assets/icons/personal-data/email.svg', 'Email', 'text'],
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
    console.log(this.input[i])
    if (this.input[0] != '' &&
        this.input[1].includes('@') &&
        this.input[2] != '' &&
        this.input[3] != '' &&
        this.input[2] === this.input[3])
    {
      return this.isInputPasswordValid = true;
    } else {
      return this.isInputPasswordValid = false;
    }
  }

  addErrorLabel(i: number) {
    if (this.input[2] !== this.input[3] && this.input[2] !== '' && this.input[3] !== '') {
      if (this.elementoComErro[2] !== 2) {
        this.arrayPersonalDataInputs[this.pageType][3].label = 'As senhas não conferem';
        this.elementoComErro[2] = 2;
        this.elementoComErro[3] = 3;
      }
    } else {
      this.elementoComErro[2] = -1;
      this.elementoComErro[3] = -1;
      this.arrayPersonalDataInputs[this.pageType][3].label = '';
    }
  
    if (this.input[1] !== '' && !this.input[1].includes('@')) {
      if (this.elementoComErro[1] !== 1) {
        this.arrayPersonalDataInputs[this.pageType][1].label = 'O Email informado é inválido';
        this.elementoComErro[1] = 1;
      }
    } else {
      this.elementoComErro[1] = -1;
      this.arrayPersonalDataInputs[this.pageType][1].label = '';
    }
  }
}