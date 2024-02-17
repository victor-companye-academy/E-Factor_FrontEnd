import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-language-modal',
  templateUrl: './edit-profile-language-modal.component.html',
  styleUrls: ['./edit-profile-language-modal.component.scss']
})
export class EditProfileLanguageModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  constructor(private messageService: MessageService, private professionalService: ProfessionalService) { 
    
    this.professionalService.getLanguagesList().subscribe(
      (res: any[]) => {
        this.languagesList = res;
      }
    )
  }

  protected isLoading: boolean = false;
  protected editedProfile: any;
  protected search: string = '';
  protected searchObj: any = { idioma: '', id: 0 };
  protected filteredLanguages: Array<any> = [];
  protected languageLevel: string = '';
  protected isValid: boolean = false;
  protected errMsg: string = '';
  protected languagesList: Array<any> = [];
  protected languagesToSave: Array<any> = [];

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    document.querySelector('.main')?.classList.add('blur-background');
  }

  onSubmit() {
    this.isLoading = true;
    this.professionalService.saveLanguages(this.languagesToSave).subscribe(
      res => {
        this.isLoading = false;
        this.saveChanges.emit();
        document.querySelector('.main')?.classList.remove('blur-background');
      },
      error => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível salvar o idioma' });
      }
    )
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  filterLanguage() {
    if (!this.search) {
      this.filteredLanguages = [];
      return;
    }

    this.filteredLanguages = this.languagesList.filter(idiomas =>
      idiomas.idioma.toLowerCase().startsWith(this.search.toLowerCase())
    );
  }

  getHighlightedText(language: string): string {
    const index = language.toLowerCase().indexOf(this.search.toLowerCase());
    if (index >= 0) {
      const prefix = language.substring(0, index);
      const highlighted = language.substring(index, index + this.search.length);
      const suffix = language.substring(index + this.search.length);
      return `${prefix}<strong>${highlighted}</strong>${suffix}`;
    } else {
      return language;
    }
  }

  addLanguage(language: any, level: string) {
    for (let i = 0; i < this.editedProfile.idiomas.length; i++) {
      if (this.editedProfile.idiomas[i].idioma === language.idioma) {
        this.errMsg = "O idioma escolhido já existe em sua lista de idiomas.";
        return;
      }
    }
    if(this.languagesList.includes(language)) {
      this.editedProfile.idiomas.push({ idioma: language.idioma, nivel: level.toUpperCase() });
      this.languagesToSave.push({ idioma: language.id, nivel: level.toUpperCase() });
      this.errMsg = '';
    } else {
      this.errMsg = 'Idioma não encontrado.';
    }

    this.searchObj = { idioma: '', id: 0 };
    this.search = '';
    this.filteredLanguages = [];
  }

  addLanguageToInput(language: any) {
    this.searchObj = language;
    this.search = language.idioma;
    this.filteredLanguages = [];
  }

  deleteLanguage(language: any) {
    this.messageService.add({ severity: 'info', summary: 'Aviso', detail: 'Não é possível deletar o idioma no momento.' }); // TODO: remover idioma da lista
  }

  changeIsValid(){
    if(this.searchObj && this.languageLevel){
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
