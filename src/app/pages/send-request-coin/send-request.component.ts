import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss'],
  providers: [MessageService]
})
export class SendRequestComponent {

  constructor(private messageService: MessageService) { }

  protected coin: number = 105

  private isValid: boolean = true

  showSuccess() {
    if (this.isValid) {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Solicitação enviada' });
      this.isValid = false
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Solicitação já enviada' });
    }

  }
}
