import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/core/service/email/email.service';

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
  protected isLoading: boolean = false;

  constructor(private router: Router, private emailService: EmailService) { }

  changePassword(){
    this.isLoading = true;
    this.emailService.infoChangePassword.novaSenha = this.input[0];
    this.emailService.changePassword().subscribe(
      res => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error => {
        this.isLoading = false;
        this.msgError = 'Erro ao alterar senha. Tente novamente.'
      }
    )
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
