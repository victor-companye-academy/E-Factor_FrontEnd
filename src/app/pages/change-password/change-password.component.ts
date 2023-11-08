import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  protected msgError: string = '';
  protected isContinueBtnActive: boolean = false;
  protected input: Array<string> = ['', ''];
  protected showPassword: Array<boolean> = [false, false];

  changePassword(){

  }


  showPasswordToggle(i: number){
    this.showPassword[i] = !this.showPassword[i];
  }

  isInputValid(event: any, i: number) {
    let value = event.target.value;
    this.input[i] = value;
    if (
        this.input[0] != '' &&
        this.input[1] != '' &&
        this.input[0] === this.input[1])
    {
      return this.isContinueBtnActive = true;
    } else {
      return this.isContinueBtnActive = false;
    }
  }

  addErrorLabel(i: number) {
    this.validatePasswordInput();
  }

  validatePasswordInput() {
    if (this.input[0] !== this.input[1] && this.input[0] !== '' && this.input[1] !== '') {
      this.setErrorMessage(0, 'As senhas não conferem');
      this.setErrorMessage(1, 'As senhas não conferem');
    } else {
      this.clearErrorMessage(0);
      this.clearErrorMessage(1);
    }
  }

  setErrorMessage(i: number, message: string) {
    this.msgError = message;
  }
  
  clearErrorMessage(i: number) {
    this.msgError = '';
  }
}
