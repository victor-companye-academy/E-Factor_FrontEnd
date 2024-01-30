import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { LoginService } from 'src/app/core/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) {}

  showPassword: boolean = false;
  protected email: string = "";
  protected password: string = "";
  protected isLoading: boolean = false;

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.removeToken();
    }
  }

  showPasswordToggle(){
    this.showPassword = !this.showPassword;
  }

  login() {
    this.isLoading = true;
    this.clearErrorMessage();
    this.loginService.login(this.email, this.password).subscribe(
      token => {
        this.isLoading = false;
        this.authService.setToken(token);
        this.clearErrorMessage();
        this.redirectTo('/');
      },
      error => {
        this.isLoading = false;
        if (error.status !== 401) {
          this.setErrorMessage("Ocorreu um erro inesperado, por favor, tente novamente");
        } else {
          this.setErrorMessage("Email ou senha inválidos");
        }
      }
    );
  }

  private clearErrorMessage() {
    document.getElementById("errorMsg")!.innerHTML = "";
  }

  private setErrorMessage(message: string) {
    document.getElementById("errorMsg")!.innerHTML = message;
  }

  private redirectTo(url: string) {
    window.location.href = url;
  }
}
