import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-infos-modal',
  templateUrl: './edit-profile-infos-modal.component.html',
  styleUrls: ['./edit-profile-infos-modal.component.scss']
})
export class EditProfileInfosModalComponent {
  @Input() profile: any;
  @Input() showCellphone: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();
  @Output() showCellphoneField = new EventEmitter<boolean>();

  protected editedProfile: any;
  protected isValid: boolean = true;
  protected selectedPhoto: File | null = null;
  protected errMsg: string = '';

  constructor(private http: HttpClient) {}

  onPhotoChange(event: any) {
    this.selectedPhoto = event.target.files[0];
    this.uploadPhoto();
  }

  uploadPhoto() {
    if (this.selectedPhoto) {
      const formData = new FormData();
      formData.append('photo', this.selectedPhoto, this.selectedPhoto.name);

      this.http.post<any>('http://localhost:3000/upload', formData).subscribe(response => {
        this.editedProfile[0].photo = response.imagePath;
      }, error => {
        console.log(error);
      });
    }
  }

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    this.saveChanges.emit(this.editedProfile[0]);
    this.showCellphoneField.emit(this.showCellphone);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }

  cancelEdit() {
    this.closeModal.emit(true);
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.remove('blur-background');
    }
  }

  getCityOptions(state: string): string[] {
    const cities: { [key: string]: string[] } = {
      'Acre': ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'],
      'Alagoas': ['Maceió', 'Arapiraca', 'Rio Largo'],
      'Amapá': ['Macapá', 'Santana', 'Laranjal do Jari'],
      'Amazonas': ['Manaus', 'Parintins', 'Itacoatiara'],
      'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista'],
      'Ceará': ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'],
      'Distrito Federal': ['Brasília'],
      'Espírito Santo': ['Vitória', 'Vila Velha', 'Cariacica'],
      'Goiás': ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'],
      'Maranhão': ['São Luís', 'Imperatriz', 'São José de Ribamar'],
      'Mato Grosso': ['Cuiabá', 'Várzea Grande', 'Rondonópolis'],
      'Mato Grosso do Sul': ['Campo Grande', 'Dourados', 'Três Lagoas'],
      'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Contagem'],
      'Pará': ['Belém', 'Ananindeua', 'Santarém'],
      'Paraíba': ['João Pessoa', 'Campina Grande', 'Santa Rita'],
      'Paraná': ['Curitiba', 'Londrina', 'Maringá'],
      'Pernambuco': ['Recife', 'Jaboatão dos Guararapes', 'Olinda'],
      'Piauí': ['Teresina', 'Parnaíba', 'Picos'],
      'Rio de Janeiro': ['Rio de Janeiro', 'São Gonçalo'],
      'Rio Grande do Norte': ['Natal', 'Mossoró', 'Parnamirim'],
      'Rio Grande do Sul': ['Porto Alegre', 'Caxias do Sul'],
      'Rondônia': ['Porto Velho', 'Ji-Paraná', 'Ariquemes'],
      'Roraima': ['Boa Vista', 'Caracaraí', 'Rorainópolis'],
      'Santa Catarina': ['Florianópolis', 'Joinville', 'Blumenau'],
      'São Paulo': ['São Paulo', 'Guarulhos', 'Campinas'],
      'Sergipe': ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'],
      'Tocantins': ['Palmas', 'Araguaína', 'Gurupi'],
    };
  
    return cities[state] || [];
  }

  updateCitySelect(){
    this.editedProfile[0].city = this.getCityOptions(this.editedProfile[0].state)[0];
  }

  getStateOptions(): string[] {
    return [
      'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',
      'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
      'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
      'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
      'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
      'Sergipe', 'Tocantins'
    ];
  }

  getSeniorityOptions(): string[] {
    return ['Estagiário', 'Trainee', 'Júnior', 'Pleno', 'Sênior'];
  }

  verifyInfos() {
    if (this.editedProfile[0].name.trim() == '' ||
        this.editedProfile[0].age.trim() == '' ||
        parseInt(this.editedProfile[0].age) <= 0 ||
        this.editedProfile[0].city == '' ||
        this.editedProfile[0].state == '' ||
        this.editedProfile[0].email.trim() == '' ||  
        this.editedProfile[0].cellphone.trim() == '' ||
        this.editedProfile[0].seniority == '' ||
        !this.isEmailValid()) {
      return this.isValid = false;
    } else {
      return this.isValid = true;
    }
  }

  applyPhoneMask(event: any): void {
    const input = this.numberMask(event);

    let numericInput = input.replace(/[^0-9]/g, '');
  
    if (numericInput.length <= 10) {
      numericInput = numericInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      numericInput = numericInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    this.editedProfile[0].cellphone = numericInput;
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    return event.target.value;
  }

  isEmailValid(){
    let email = this.editedProfile[0].email;
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g)){
      this.errMsg = '';
      return true;
    } else {
      this.errMsg = 'Email inválido';
      return false;
    }
  }
}
