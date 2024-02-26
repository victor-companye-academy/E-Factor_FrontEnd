import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/app/core/service/email/email.service';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.component.html',
  styleUrls: ['./code-confirmation.component.scss']
})
export class CodeConfirmationComponent {

  protected msgError: string = '';
  protected code: string = '';
  protected email: string = '';
  protected isContinueBtnActive: boolean = false;
  protected isLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private emailService: EmailService) {
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  codeInput(event: any){
    this.code = event.target.value;
    this.msgError = '';
    if (this.code.length == 6) {
      this.isContinueBtnActive = true;
    } else {
      this.isContinueBtnActive = false;
    }
  }

  confirmCode() {
    this.isLoading = true;
    
    this.emailService.verifyCode(this.email, this.code).subscribe(
      response => {
        if (response.status === 200) {
          if (response.error && response.error.text === 'Ok') {
            // Se a mensagem for 'Ok', considera como sucesso
            this.msgError = '';
            this.isLoading = false;
            this.emailService.infoChangePassword.email = this.email;
            this.router.navigate(['/change-password']);
          } else {
            this.handleErrorResponse("Houve um erro durante a verificação do código. Tente novamente.");
          }
        } else {
          this.handleErrorResponse("Houve um erro durante a verificação do código. Tente novamente.");
        }
      },
      error => {
        this.isLoading = false;
        if (error.status === 200 && error.error && error.error.text === 'Ok') {
          // Se a mensagem for 'Ok', considera como sucesso
          this.msgError = '';
          this.isLoading = false;
          this.emailService.infoChangePassword.email = this.email;
          this.router.navigate(['/change-password']);
        }

        this.handleErrorResponse("Código incorreto, tente novamente.");
      }
    );
  }
  
  private handleErrorResponse(msgError: string) {
    this.isLoading = false;
    this.msgError = msgError;
  }
}
