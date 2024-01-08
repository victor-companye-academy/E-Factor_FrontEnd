
import { FindCepService } from '../../core/service/findCep/find-cep.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { AddressArray } from 'src/app/core/interfaces/address-array';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  @Output() inputsFilled = new EventEmitter<boolean>();

  errorMsg: string = '';
  isCepGeneric: boolean = false;
  addressComponents: Array<AddressArray> = [
    {
      title: "cep",
      value: ''
    },
    {
      title: "cidade",
      value: ''
    },
    {
      title: "estado",
      value: ''
    },
    {
      title: "bairro",
      value: ''
    },
    {
      title: "logradouro",
      value: ''
    },
    {
      title: "numero",
      value: ''
    },
  ]

  constructor (private findCepService: FindCepService) {}

  checkInputs() {
    const paginaAtiva = this.addressComponents;

    const todosPreenchidos = paginaAtiva.every((input) => input.value !== '');
    
    if (todosPreenchidos) {
      this.inputsFilled.emit(true);
    } else {
      this.inputsFilled.emit(false);
    }
  }

  searchAddress(cep: string) {
    if(this.isCepValid(cep)){
      this.findCepService.getAddressByCep(cep).subscribe(data => {
        this.fillAddressFields(data);
      });
      this.errorMsg = '';
    } else {
      this.errorMsg = "CEP inválido, por favor tente novamente";
      for(let i = 0; i < this.addressComponents.length - 1; i++){
        this.addressComponents[i].value = '';
      }
    }

    this.checkInputs();
  }

  isCepValid(cep: string): boolean{
    cep = cep.replace(/\D/g, '');

    const validacep = /^[0-9]{8}$/;

    if (cep !== '') {
      if(validacep.test(cep)){
        return true;
      }
    }
    return false;
  }

  fillAddressFields(addressData: any) {
    this.addressComponents[1].value = addressData.localidade;
    this.addressComponents[2].value = addressData.uf;
    this.addressComponents[3].value = addressData.bairro;
    this.addressComponents[4].value = addressData.logradouro;

    for (let i = 0; i < this.addressComponents.length - 1; i++){
      if(this.addressComponents[i].value == null || this.addressComponents[i].value == ''){
        if (i != 3 && i != 4){
          this.errorMsg = "CEP inválido, por favor tente novamente";
          this.isCepGeneric = false;
          for(let i = 0; i < this.addressComponents.length - 1; i++){
            this.addressComponents[i].value = '';
          }
        } else {
          this.isCepGeneric = true;
        }
      } else {
          this.isCepGeneric = false;
      }
    }

    this.checkInputs();
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9-]/g, '');
    return event.target.value;
  }

  applyCepMask(event: any) {
    let value = this.numberMask(event);

    if (value.length == 5) {
      value = value.slice(0, 5) + '-' + value.slice(8);
    }

    this.addressComponents[0].value = value;
  }
}
