import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { UtilService } from 'src/app/core/service/util/util.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss'],
  providers: [MessageService]
})
export class SendRequestComponent {

  constructor(private messageService: MessageService, private router: Router, private utilService: UtilService, private businessService: BusinessService) { }

  protected coin: number = 105

  private isValid: boolean = true
  protected wasClicked: boolean = false;

  showSuccess() {
    if (this.isValid) {

      this.businessService.requestVoucher(100).subscribe({
        next: res => {
          this.wasClicked = true;
          console.log(res)

          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Solicitação enviada' });
          this.isValid = false
        },
        error: () => { 
          this.messageService.add({ severity: 'error', summary: '', detail: 'Erro ao solicitar vauncher.' });
        }

      })

    } else {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Solicitação já enviada' });
    }

  }

  async onClose() {
    let id: number;

    this.utilService.businessId$.subscribe({
      next: res => {
        id = res;
        this.router.navigateByUrl(`/business-profile/${id}`);
      },
      error: () => {
        console.log("Erro ao voltar para página do perfil empresa.")
      }
    })

  }
}
