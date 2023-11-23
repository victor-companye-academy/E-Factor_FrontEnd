import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-language-modal',
  templateUrl: './edit-profile-language-modal.component.html',
  styleUrls: ['./edit-profile-language-modal.component.scss']
})
export class EditProfileLanguageModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;
  protected searchText: string = '';
  protected filteredLanguages: Array<string> = [];
  protected languageLevel: string = '';
  protected isValid: boolean = false;
  protected errMsg: string = '';

  protected languagesList: Array<string> = [
    'Inglês', 'Espanhol', 'Francês', 'Alemão', 'Chinês (Mandarim)', 'Japonês', 'Coreano',
    'Russo', 'Árabe', 'Português - BR', 'Português - PT', 'Italiano', 'Holandês', 'Sueco', 'Norueguês', 'Dinamarquês',
    'Finlandês', 'Grego', 'Turco', 'Hindi', 'Urdu', 'Bengali', 'Punjabi', 'Indonésio', 'Malaio',
    'Vietnamita', 'Tailandês', 'Tagalo', 'Malgaxe', 'Suaíli', 'Amárico', 'Hauçá', 'Iorubá',
    'Zulu', 'Somali', 'Oromo', 'Tâmil', 'Telugu', 'Marata', 'Birmanês', 'Khmer', 'Laosiano',
    'Hmong', 'Cingalês', 'Filipino', 'Maori', 'Fijiano', 'Tonganês', 'Samoano', 'Havaiano',
    'Inuktitut', 'Cherokee', 'Navajo', 'Quechua', 'Guarani', 'Mapudungun', 'Iídiche',
    'Curdo', 'Pashto', 'Dari', 'Tajique', 'Turcomeno', 'Uzbeque', 'Quirguiz', 'Cazaque', 'Mongol',
    'Tibetano', 'Uigur', 'Bislama', 'Pidgin de Papua Nova Guiné', 'Pijin das Ilhas Salomão',
    'Tok Pisin', 'Marshalês', 'Palauano', 'Chamorro', 'Kosraean', 'Chuukese', 'Yapese',
    'Māori', 'Samoano', 'Taitiano', 'Rapa Nui', 'Fijiano', 'Havaiano', 'Rotumano', 'Gilbertês',
    'Marshalês', 'Nauruano', 'Palauano', 'Samoano', 'Tokelauano', 'Tonganês', 'Tuvaluano'
  ];

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    this.saveChanges.emit(this.editedProfile[0].languages);
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

  filterLanguage() {
    if (!this.searchText) {
      this.filteredLanguages = [];
      return;
    }

    this.filteredLanguages = this.languagesList.filter(language =>
      language.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

  getHighlightedText(language: string): string {
    const index = language.toLowerCase().indexOf(this.searchText.toLowerCase());
    if (index >= 0) {
      const prefix = language.substring(0, index);
      const highlighted = language.substring(index, index + this.searchText.length);
      const suffix = language.substring(index + this.searchText.length);
      return `${prefix}<strong>${highlighted}</strong>${suffix}`;
    } else {
      return language;
    }
  }

  addLanguage(language: string, level: string) {
    for (let i = 0; i < this.editedProfile[0].languages.length; i++) {
      if (this.editedProfile[0].languages[i].language === language) {
        this.errMsg = "O idioma escolhido já existe em sua lista de idiomas.";
        return;
      }
    }
    if(this.languagesList.includes(language)) {
      this.editedProfile[0].languages.push({ language: language, level: level });
      this.errMsg = '';
    } else {
      this.errMsg = 'Idioma não encontrado.';
    }

    this.searchText = '';
    this.filteredLanguages = [];
  }

  addLanguageToInput(language: string) {
    this.searchText = language;
    this.filteredLanguages = [];
  }

  deleteLanguage(i: number) {
    this.editedProfile[0].languages.splice(i, 1);
  }

  changeIsValid(){
    if(this.searchText && this.languageLevel){
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
