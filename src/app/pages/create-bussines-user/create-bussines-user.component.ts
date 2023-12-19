import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessUser } from 'src/app/core/interfaces/business-user';
import { CreateBusinessUserService } from 'src/app/core/service/create-business-user/create-business-user.service';

@Component({
  selector: 'app-create-bussines-user',
  templateUrl: './create-bussines-user.component.html',
  styleUrls: ['./create-bussines-user.component.scss']
})
export class CreateBussinesUserComponent {

  constructor(private router:Router, private createBusinessUserService: CreateBusinessUserService) { }

  protected coin!: number;
  protected id: string = '6';
  protected businessId: string = '1';

  protected emailEmpty: boolean = false;
  protected emailConfirmationEmpty: boolean = false;
  protected emailInvalid: boolean = false;
  protected emailConfirmationInvalid: boolean = false;
  protected emailsDontMatch: boolean = false;

  protected passwordEmpty: boolean = false;
  protected passwordConfirmationEmpty: boolean = false;
  protected passwordDontMatch: boolean = false;

  protected cpfEmpty: boolean = false;
  protected cpfInvalid: boolean = false;

  protected nameEmpty: boolean = false;

  protected phoneEmpty: boolean = false;
  protected phoneInvalid: boolean = false;

  protected birthDateEmpty: boolean = false;
  protected birthDateInvalid: boolean = false;

  protected showPassword: boolean = false;
  protected showPasswordConfirmation: boolean = false;

  protected form = new FormGroup({
    email: new FormControl('',
      [
        Validators.required
      ]),
    emailConfirmation: new FormControl('',
      [
        Validators.required
      ]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(8)
      ]),
    passwordConfirmation: new FormControl('',
      [
        Validators.required,
        Validators.minLength(8)
      ]),
    cpf: new FormControl('',
      [
        Validators.required,
      ]),
    name: new FormControl('',
      [
        Validators.required
      ]),
    phone: new FormControl('',
      [
        Validators.required,
        Validators.minLength(14)
      ]),
    birthDate: new FormControl('',
      [
        Validators.required
      ])
  })


  //início dos métodos

  validateEmailEmpty(): void {
    const email: string | null = this.form.get('email')!.value

    if (email?.trim() === '' || !email) {
      this.emailEmpty = true;
    } else {
      this.emailEmpty = false;
    }
  }

  validateEmailConfirmationEmpty(): void {
    const emailConfirmation: string | null = this.form.get('emailConfirmation')!.value;
  
    if (emailConfirmation?.trim() === '' || !emailConfirmation) {
      this.emailConfirmationEmpty = true;
    } else {
      this.emailConfirmationEmpty = false;
    }
  }

  validateEmailValid(index: number): void {
    const email = this.form.get('email')!.value;
    const emailConfirmation = this.form.get('emailConfirmation')!.value;
    if((email?.length ?? 0) > 0){
      this.emailInvalid = !email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g);
    }
    if((emailConfirmation?.length ?? 0) > 0){
      this.emailConfirmationInvalid = !emailConfirmation?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g);
    }
  }

  validateEmailMatchValid(): void {
    const email = this.form.get('email')!.value;
    const emailConfirmation = this.form.get('emailConfirmation')!.value;
    if((email?.length ?? 0) > 0 && (emailConfirmation?.length ?? 0) > 0){
      this.emailsDontMatch = !(email === emailConfirmation);
    }
  }
  
  validatePasswordEmpty(): void {
    const password: string | null = this.form.get('password')!.value;
  
    if (password?.trim() === '' || !password || (password?.length ?? 0) < 8) {
      this.passwordEmpty = true;
    } else {
      this.passwordEmpty = false;
    }
  }
  
  validatePasswordConfirmationEmpty(): void {
    const passwordConfirmation: string | null = this.form.get('passwordConfirmation')!.value;
  
    if (passwordConfirmation?.trim() === '' || !passwordConfirmation || (passwordConfirmation?.length ?? 0) < 8) {
      this.passwordConfirmationEmpty = true;
    } else {
      this.passwordConfirmationEmpty = false;
    }
  }

  validatePasswordMatchValid(): void {
    const password = this.form.get('password')!.value;
    const passwordConfirmation = this.form.get('passwordConfirmation')!.value;
    if((password?.length ?? 0) > 0 && (passwordConfirmation?.length ?? 0) > 0){
      this.passwordDontMatch = !(password === passwordConfirmation);
    }
  }
  
  validateCPFEmpty(): void {
    const cpf: string | null = this.form.get('cpf')!.value;
  
    if (cpf?.trim() === '' || !cpf) {
      this.cpfEmpty = true;
    } else {
      this.cpfEmpty = false;
    }
  }

  validateCpfValid(): void {
    const cpfLength = (this.form.get('cpf')?.value?.length ?? 0);
    if(cpfLength > 0){
      this.cpfInvalid = !this.isCpfValid();
    }
  }
  
  validateNameEmpty(): void {
    const name: string | null = this.form.get('name')!.value;
  
    if (name?.trim() === '' || !name) {
      this.nameEmpty = true;
    } else {
      this.nameEmpty = false;
    }
  }
  
  validatePhoneEmpty(): void {
    const phone: string | null = this.form.get('phone')!.value;
  
    if (phone?.trim() === '' || !phone) {
      this.phoneEmpty = true;
    } else {
      this.phoneEmpty = false;
    }
  }

  validatePhoneValid(): void {
    const phoneLength = (this.form.get('phone')?.value?.length ?? 0);
    if(phoneLength > 0){
      this.phoneInvalid = (phoneLength < 14);
    }
  }
  
  validateBirthDateEmpty(): void {
    const birthDate: string | null = this.form.get('birthDate')!.value;
  
    if (birthDate?.trim() === '' || !birthDate) {
      this.birthDateEmpty = true;
    } else {
      this.birthDateEmpty = false;
    }
  }

  validateBirthDateValid(): void {
    const birthDate: string | null = this.form.get('birthDate')!.value;
    const birthDateLength = (birthDate?.length ?? 0);
    const minimumAge: number = 16;
    if (birthDateLength > 0 && birthDate !== null) {
      const currentDate: Date = new Date();
      const dateOfBirth: Date = new Date(birthDate);

      const age: number = currentDate.getFullYear() - dateOfBirth.getFullYear();
      this.birthDateInvalid = !(age > minimumAge || (age === minimumAge && currentDate.getMonth() >= dateOfBirth.getMonth()));
    }
  }

  public onSubmit(): void {
    this.validateFields();
    
    if (this.form.valid && this.allFieldsValid()) {
      const newUser: BusinessUser = {
        id: this.id || '',
        businessId: this.businessId || '',
        name: this.form.get('name')?.value || '',
        email: this.form.get('email')?.value || '',
        password: this.form.get('password')?.value || '',
        cpf: this.form.get('cpf')?.value || '',
        phone: this.form.get('phone')?.value || '',
        birthDate: this.form.get('birthDate')?.value || '',
        creationDate: new Date().toISOString(),
      };
  
      this.createBusinessUserService.createNewBusinessUser(newUser);
      this.router.navigateByUrl("/manage-business-users/" + this.businessId);
    } else {
      console.log('Formulário inválido');
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
    this.validateCPFEmpty();
    this.validateCpfValid();
    this.validateNameEmpty();
    this.validatePhoneEmpty();
    this.validatePhoneValid();
    this.validateBirthDateEmpty();
    this.validateBirthDateValid();
  }
  
  private allFieldsValid(): boolean {
    return !this.emailEmpty && !this.emailInvalid && !this.emailConfirmationEmpty && !this.emailConfirmationInvalid && !this.emailsDontMatch &&
        !this.passwordEmpty && !this.passwordConfirmationEmpty && !this.passwordDontMatch && !this.cpfEmpty && !this.cpfInvalid && !this.nameEmpty &&
        !this.phoneEmpty && !this.phoneInvalid && !this.birthDateEmpty && !this.birthDateInvalid;
  }

  ngOnInit(): void {
    this.coin = 50;
  }

  isCpfValid(): boolean {
    let cpf = this.form.get('cpf')?.value;
    cpf = cpf?.replace(/\D/g, '');

    if (cpf?.length !== 11) {
      return false;
    }
  
    let sum = 0;
    let remainder;
  
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
  
    return true;
  }

  applyCpfMask(event: any): void {
    const input = this.numberMask(event);
  
    let maskedValue = input.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d)/, '$1.$2');
    maskedValue = maskedValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
    this.form.get('cpf')?.setValue(maskedValue);
  }

  applyPhoneMask(event: any): void {
    const input = this.numberMask(event);

    let numericInput = input.replace(/[^0-9]/g, '');
  
    if (numericInput.length <= 10) {
      numericInput = numericInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      numericInput = numericInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    this.form.get('phone')?.setValue(numericInput);
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9-]/g, '');
    return event.target.value;
  }
}
