import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Skill } from 'src/app/core/interfaces/skill';
import { CreateVacancyService } from 'src/app/core/service/create-vacancy/create-vacancy.service';
import { SkillsService } from 'src/app/core/service/skills/skills.service';

@Component({
  selector: 'app-create-vacancy-details',
  templateUrl: './create-vacancy-details.component.html',
  styleUrls: ['./create-vacancy-details.component.scss']
})
export class CreateVacancyDetailsComponent {
  constructor(private router: Router, private vacancyService: CreateVacancyService, private skillService: SkillsService) { }

  protected skillsInput: string = '';
  protected suggestionsSkills!: string[];

  protected habilidades!: string[];
  protected senioridade: string | undefined;
  protected modalidade: string | undefined;
  protected daysOfWeek!: string[] | undefined;
  protected tipoContrato: string | undefined;
  protected period: string | undefined;
  protected shift: string | undefined;
  protected vacancyArea: string | undefined;

  protected validation: any;
  protected vacancyData: any;

  protected mesageError: string | undefined;

  protected formDetails = new FormGroup({
    habilidades: new FormControl('', [Validators.nullValidator, Validators.required]),
    senioridade: new FormControl('', [Validators.nullValidator, Validators.required]),
    vacancyArea: new FormControl('', [Validators.nullValidator, Validators.required]),
    modalidade: new FormControl('', [Validators.nullValidator, Validators.required]),
    daysOfWeek: new FormControl(''),
    tipoContrato: new FormControl('', [Validators.nullValidator, Validators.required]),
    period: new FormControl('', [Validators.nullValidator, Validators.required]),
    shift: new FormControl('', [Validators.nullValidator, Validators.required]),
  })

  // skilss service get
  protected skillsList: Array<string> = ['dsf']


  private inValidate(formName: string): void {
    switch (formName) {
      case 'habilidades':
        if (this.formDetails.controls['habilidades']?.status === 'INVALID') {
          this.validation.habilidades = true;
          break;
        }
        this.validation.habilidades = false;
        break;

      case 'senioridade':
        if (this.formDetails.controls['senioridade']?.status === 'INVALID') {
          this.validation.senioridade = true;
          break;
        }
        this.validation.senioridade = false;
        break;

      case 'vacancyArea':
        if (this.formDetails.controls['vacancyArea']?.status === 'INVALID') {
          this.validation.vacancyArea = true;
          break;
        }
        this.validation.vacancyArea = false;
        break;

      case 'modalidade':
        if (this.formDetails.controls['modalidade']?.status === 'INVALID') {
          this.validation.modalidade = true;
          break;
        }
        this.validation.modalidade = false;
        break;

      case 'daysOfWeek':
        if ((this.formDetails.controls['daysOfWeek']?.status === 'INVALID' || !this.daysOfWeek || this.daysOfWeek.length === 0) && this.modalidade !== 'remoto') {
          this.validation.daysOfWeek = true;
          break;
        }
        this.validation.daysOfWeek = false;
        break;

      case 'tipoContrato':
        if (this.formDetails.controls['tipoContrato']?.status === 'INVALID') {
          this.validation.tipoContrato = true;
          break;
        }
        this.validation.tipoContrato = false;
        break;

      case 'period':
        if (this.formDetails.controls['period']?.status === 'INVALID') {
          this.validation.period = true;
          break;
        }
        this.validation.period = false;
        break;

      case 'shift':
        if (this.formDetails.controls['shift']?.status === 'INVALID') {
          this.validation.shift = true;
          break;
        }
        this.validation.shift = false;
        break;

      default:
        console.log('erro')
    }
  }

  onAddSkill(habilidades: string): void {
    this.skillsInput = ''

    if (this.habilidades) {
      let index = this.habilidades.indexOf(habilidades);

      if (index === -1) {
        this.habilidades?.push(habilidades)
      }
    }
  }

  onRemoveSkill(habilidades: string): void {
    this.habilidades = this.habilidades?.filter(element => element !== habilidades)
  }

  onSuggestionItems(event: Event): void {
    const inputValue: string = (event.target as HTMLInputElement).value;

    this.suggestionsSkills = this.suggestionsSkills = this.skillsList.filter(item =>
      item.toLowerCase().startsWith(inputValue.toLowerCase()));
  }

  onStartOfSuggestion(suggestion: string) {
    const inputValue: string = this.skillsInput;
    const startOfSuggestion: string = suggestion.substring(0, inputValue.length);
    return startOfSuggestion
  }

  onRestOfSuggestion(suggestion: string) {
    const inputValue: string = this.skillsInput;
    const restOfSuggestion: string = suggestion.substring(inputValue.length);
    return restOfSuggestion;
  }

  onChangeDays(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value

    if (element instanceof HTMLInputElement) {

      if (element.type === 'checkbox') {
        if (element.checked) {
          this.daysOfWeek?.push(value)
        } else {
          this.daysOfWeek = this.daysOfWeek?.filter(e => e !== value)
        }
      }
    }
  }

  onSubmit() {
    this.formDetails.get('habilidades')?.setValue(this.habilidades as any);
    this.formDetails.get('senioridade')?.setValue(this.senioridade as any);
    this.formDetails.get('vacancyArea')?.setValue(this.vacancyArea as any);
    this.formDetails.get('modalidade')?.setValue(this.modalidade as any);
    this.formDetails.get('daysOfWeek')?.setValue(this.daysOfWeek as any);
    this.formDetails.get('tipoContrato')?.setValue(this.tipoContrato as any);
    this.formDetails.get('period')?.setValue(this.period as any);
    this.formDetails.get('shift')?.setValue(this.shift as any);

    let moreDetails;

    const vacancy: any = this.vacancyService.getCreateVacancy();

    let isInvalid: boolean = false;

    for (let key in this.formDetails.controls) {
      this.inValidate(key);
    }

    if (this.validation && this.formDetails.valid) {

      for (let key in this.validation) {
        if (this.validation[key] === true) {
          isInvalid = true
        }
      }

      if (vacancy.title === undefined || '' && vacancy.description === undefined || '') {
        this.router.navigateByUrl("/create-vacancy");
      }
    }

    if (this.formDetails.valid && vacancy && !isInvalid) {

      moreDetails = `
      <span class="fw-semibold">Área da vaga: </span>${this.vacancyArea}<br> 
      <span class="fw-semibold">Período: </span>${this.period}<br>
      <span class="fw-semibold">Turno: </span>${this.shift}<br>
      `;

      if (this.daysOfWeek && this.daysOfWeek?.length > 0) {
        moreDetails += `
      <span class="fw-semibold">Dias da semana: </span>${this.daysOfWeek}<br>
        `;
      }

      moreDetails += `<br>`

      this.vacancyService.insertDetails(this.habilidades as string[], this.senioridade as string, this.modalidade as string, this.tipoContrato as string, moreDetails as string)

      this.router.navigateByUrl("/create-vacancy/create");
    }
  }

  async ngOnInit() {
    const vacancy = this.vacancyService.getCreateVacancy();

    try {
      const res = await lastValueFrom(this.skillService.getSkills());
      this.skillsList = res.map(skill => skill.habilidade);

    } catch (error) {
      console.log('Erro ao processar a requisição da listagem de skills');
    }


    if (vacancy.titulo === undefined || '' && vacancy.descricao === undefined || '') {
      this.router.navigateByUrl("/create-vacancy");
    } else {
      this.validation = {};

      this.daysOfWeek = [];
      this.habilidades = [];
      this.vacancyArea = '';
      this.modalidade = '';
      this.tipoContrato = '';
      this.period = '';
      this.senioridade = '';
      this.shift = '';
    }
  }
}