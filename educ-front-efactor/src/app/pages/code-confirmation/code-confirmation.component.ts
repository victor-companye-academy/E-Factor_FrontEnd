import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.component.html',
  styleUrls: ['./code-confirmation.component.scss']
})
export class CodeConfirmationComponent {

  protected msgError: string = '';
  protected code: string = '';
  protected email;
  protected isContinueBtnActive: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.email = this.route.snapshot.paramMap.get('email');
  }

  codeInput(event: any){
    this.code = event.target.value;
    this.msgError = '';
    if (this.code != ''){
      this.isContinueBtnActive = true;
    } else {
      this.isContinueBtnActive = false;
    }
  }

  confirmCode(){
    //validação de código
    if(true){
      this.router.navigate(['/change-password']);
    } else {
      this.msgError = 'O código informado é inválido';
    }
  }
}
