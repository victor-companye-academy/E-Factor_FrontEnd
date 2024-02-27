import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BusinessUserService } from 'src/app/core/service/business-user/business-user.service';

@Component({
  selector: 'app-delete-business-user-modal',
  templateUrl: './delete-business-user-modal.component.html',
  styleUrls: ['./delete-business-user-modal.component.scss']
})
export class DeleteBusinessUserModalComponent {
  @Input() user: any;
  @Output() confirmDelete = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private businessUserService: BusinessUserService, private messageService: MessageService) { }

  protected isLoading: boolean = false;

  ngOnInit() {
    document.querySelector('.main')?.classList.add('blur-background');
  }

  onSubmit() {
    this.isLoading = true;
    this.businessUserService.desativateBusinessUser(this.user.id).subscribe(
      res => {
        this.isLoading = false;
        this.closeModal.emit(true);
        this.confirmDelete.emit();
        document.querySelector('.main')?.classList.remove('blur-background');
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao desativar usuário' });
      }
    )
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }
}
