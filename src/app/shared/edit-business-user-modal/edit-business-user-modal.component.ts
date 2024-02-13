import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BusinessUserService } from 'src/app/core/service/business-user/business-user.service';

@Component({
  selector: 'app-edit-business-user-modal',
  templateUrl: './edit-business-user-modal.component.html',
  styleUrls: ['./edit-business-user-modal.component.scss']
})
export class EditBusinessUserModalComponent {
  @Input() user: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected isLoading: boolean = false;
  protected editedUser: any;
  protected isValid: boolean = false;
  protected emailConfirm: string = '';
  protected passwordConfirm: string = '';

  constructor(private businessUserService: BusinessUserService, private messageService: MessageService) { }

  ngOnInit() {
    this.editedUser = JSON.parse(JSON.stringify(this.user));
    this.emailConfirm = this.editedUser.email;
    document.querySelector('.main')?.classList.add('blur-background');
  }

  onSubmit() {
    this.isLoading = true;
    this.validateFields();
    
    if (this.allFieldsValid()) {
      this.businessUserService.updateBusinessUser(this.editedUser.id, this.editedUser).subscribe(
        res => {
          this.isLoading = false;
          this.closeModal.emit(true);
          this.saveChanges.emit();
          document.querySelector('.main')?.classList.remove('blur-background');
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao editar usuário' });
        }
      );
    } else {
      this.isLoading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha todos os campos corretamente' });
    }
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  verifyUser() {
    this.validateFields();
    this.isValid = this.allFieldsValid();
  }

  applyPhoneMask(event: any): void {
    const input = this.numberMask(event);
  
    let numericInput = input.replace(/\D/g, '');
  
    if (numericInput.length <= 10) {
      numericInput = numericInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      numericInput = numericInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  
    this.editedUser.telefone = numericInput;
  }
  
  numberMask(event: any): string {
    event.target.value = event.target.value.replace(/\D/g, '');
    return event.target.value;
  }

  //validação

  protected emailEmpty: boolean = false;
  protected emailConfirmationEmpty: boolean = false;
  protected emailInvalid: boolean = false;
  protected emailConfirmationInvalid: boolean = false;
  protected emailsDontMatch: boolean = false;

  protected passwordEmpty: boolean = false;
  protected passwordConfirmationEmpty: boolean = false;
  protected passwordDontMatch: boolean = false;

  protected nameEmpty: boolean = false;

  protected phoneEmpty: boolean = false;
  protected phoneInvalid: boolean = false;

  protected showPassword: boolean = false;
  protected showPasswordConfirmation: boolean = false;

  validateEmailEmpty(): void {
    const email: string | null = this.editedUser.email;

    if (email?.trim() === '' || !email) {
      this.emailEmpty = true;
    } else {
      this.emailEmpty = false;
    }
  }

  validateEmailConfirmationEmpty(): void {
    const emailConfirmation: string | null = this.emailConfirm;
  
    if (emailConfirmation?.trim() === '' || !emailConfirmation) {
      this.emailConfirmationEmpty = true;
    } else {
      this.emailConfirmationEmpty = false;
    }
  }

  validateEmailValid(index: number): void {
    const email = this.editedUser.email;
    const emailConfirmation = this.emailConfirm;

    if((email?.length ?? 0) > 0){
      this.emailInvalid = !email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g);
    }
    if((emailConfirmation?.length ?? 0) > 0){
      this.emailConfirmationInvalid = !emailConfirmation?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g);
    }
  }

  validateEmailMatchValid(): void {
    const email = this.editedUser.email;
    const emailConfirmation = this.emailConfirm;

    if((email?.length ?? 0) > 0 && (emailConfirmation?.length ?? 0) > 0){
      this.emailsDontMatch = !(email === emailConfirmation);
    }
  }
  
  validatePasswordEmpty(): void {
    const password: string | null = this.editedUser.senha;
  
    if (password?.trim() === '' || !password || (password?.length ?? 0) < 8) {
      this.passwordEmpty = true;
    } else {
      this.passwordEmpty = false;
    }
  }
  
  validatePasswordConfirmationEmpty(): void {
    const passwordConfirmation: string | null = this.passwordConfirm;
  
    if (passwordConfirmation?.trim() === '' || !passwordConfirmation || (passwordConfirmation?.length ?? 0) < 8) {
      this.passwordConfirmationEmpty = true;
    } else {
      this.passwordConfirmationEmpty = false;
    }
  }

  validatePasswordMatchValid(): void {
    const password = this.editedUser.senha;
    const passwordConfirmation = this.passwordConfirm;

    if((password?.length ?? 0) > 0 && (passwordConfirmation?.length ?? 0) > 0){
      this.passwordDontMatch = !(password === passwordConfirmation);
    }
  }
  
  validateNameEmpty(): void {
    const name: string | null = this.editedUser.nome;
  
    if (name?.trim() === '' || !name) {
      this.nameEmpty = true;
    } else {
      this.nameEmpty = false;
    }
  }
  
  validatePhoneEmpty(): void {
    const phone: string | null = this.editedUser.telefone;
  
    if (phone?.trim() === '' || !phone) {
      this.phoneEmpty = true;
    } else {
      this.phoneEmpty = false;
    }
  }

  validatePhoneValid(): void {
    const phoneLength = (this.editedUser.telefone?.length ?? 0);
    if(phoneLength > 0){
      this.phoneInvalid = (phoneLength < 14);
    }
  }

  private validateFields(): void {
    this.validateEmailEmpty();
    this.validateEmailConfirmationEmpty();
    this.validateEmailValid(0);
    this.validateEmailValid(1);
    this.validateEmailMatchValid();
    this.validatePasswordEmpty();
    this.validatePasswordConfirmationEmpty();
    this.validatePasswordMatchValid();
    this.validateNameEmpty();
    this.validatePhoneEmpty();
    this.validatePhoneValid();
  }
  
  private allFieldsValid(): boolean {
    return !this.emailEmpty && !this.emailInvalid && !this.emailConfirmationEmpty && !this.emailConfirmationInvalid && !this.emailsDontMatch &&
        !this.passwordEmpty && !this.passwordConfirmationEmpty && !this.passwordDontMatch && !this.nameEmpty &&
        !this.phoneEmpty && !this.phoneInvalid;
  }
}
