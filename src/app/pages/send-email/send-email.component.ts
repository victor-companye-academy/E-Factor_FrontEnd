import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/core/service/email/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  protected email: string = '';
  protected msgError: string = '';
  protected isSearchBtnActive: boolean = false;
  protected isLoading: boolean = false;

  constructor(private emailService: EmailService, private router: Router) { }

  inputEmail(event: any){
    this.email = event.target.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(this.email != '' && regex.test(this.email)) {
      this.isSearchBtnActive = true;
    } else {
      this.isSearchBtnActive = false;
    }
  }

  searchEmail(){
    this.isLoading = true;
    this.emailService.recoverPassword(this.email).subscribe(
      res => {
        this.isLoading = false;
        this.msgError = '';
        this.redirect();
      },
      error => {
        this.isLoading = false;
        this.msgError = 'Não conseguimos encontrar uma conta com esse e-mail.';
      }
    )
  }

  redirect(){
    this.router.navigate(['/confirm-code', this.email]);
  }
}
