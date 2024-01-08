import { Component } from '@angular/core';
import { BusinessUserInputs } from 'src/app/core/interfaces/business-user-inputs';

@Component({
  selector: 'app-business-user',
  templateUrl: './business-user.component.html',
  styleUrls: ['./business-user.component.scss']
})
export class BusinessUserComponent {
  
  protected isContinueBtnActive: boolean = false;
  protected errMsg: string = '';

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
  ]

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
}
