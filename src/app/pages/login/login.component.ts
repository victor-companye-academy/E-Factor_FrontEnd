import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { LoginService } from 'src/app/core/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private cookieService: CookieService, private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.authService.removeToken();
    }
  }

  showPassword: boolean = false;
  protected email: string = "";
  protected password: string = "";

  showPasswordToggle(){
    this.showPassword = !this.showPassword;
  }

  login() {
    this.clearErrorMessage();
    this.loginService.login(this.email, this.password).subscribe(
      token => {
        this.cookieService.set('access_token', token);
        this.clearErrorMessage();
        this.redirectTo('/');
      },
      error => {
        console.log("Error:", error);
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
