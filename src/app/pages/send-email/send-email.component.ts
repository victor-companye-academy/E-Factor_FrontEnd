import { Component } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  protected email: string = '';
  protected btnSearch: string = 'Pesquisar';
  protected msgError: string = '';
  protected isSearchBtnActive: boolean = false;
  protected text: string = 'Insira seu email para procurar sua conta.';
  protected confirmEmail: boolean = false;

  inputEmail(event: any){
    this.email = event.target.value;

    if(this.email != '' && this.email.includes('@')){
      this.isSearchBtnActive = true;
    } else {
      this.isSearchBtnActive = false;
    }
  }

  searchEmail(){
    //logica de busca de email
    if (true){
      this.text = 'Enviaremos um código para o e-mail:';
      this.msgError = '';
      this.confirmEmail = true;
      this.btnSearch = 'Enviar';
    } else {
      this.msgError = 'Não conseguimos encontrar uma conta com esse e-mail.';
    }
  }
}
