import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateVacancyService } from 'src/app/core/service/create-vacancy/create-vacancy.service';

@Component({
  selector: 'app-create-vacancy-details',
  templateUrl: './create-vacancy-details.component.html',
  styleUrls: ['./create-vacancy-details.component.scss']
})
export class CreateVacancyDetailsComponent {
  constructor(private router: Router, private vacancyService: CreateVacancyService) { }

  protected skillsInput: string = '';
  protected suggestionsSkills!: string[];

  protected skills: string[] | undefined;
  protected serniority: string | undefined;
  protected vacancyArea: string | undefined;
  protected modality: string | undefined;
  protected daysOfWeek!: string[] | undefined;
  protected contract: string | undefined;
  protected period: string | undefined;
  protected shift: string | undefined;
  protected expirationDate!: string;

  protected validation: any;
  protected vacancyData: any;

  protected mesageError: string | undefined;

  protected formDetails = new FormGroup({
    skills: new FormControl('', [Validators.nullValidator, Validators.required]),
    serniority: new FormControl('', [Validators.nullValidator, Validators.required]),
    vacancyArea: new FormControl('', [Validators.nullValidator, Validators.required]),
    modality: new FormControl('', [Validators.nullValidator, Validators.required]),
    daysOfWeek: new FormControl(''),
    contract: new FormControl('', [Validators.nullValidator, Validators.required]),
    period: new FormControl('', [Validators.nullValidator, Validators.required]),
    shift: new FormControl('', [Validators.nullValidator, Validators.required]),
    expirationDate: new FormControl('', [Validators.nullValidator, Validators.required]),
  })

  protected skillsList: Array<string> = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Vue.js',
    'Node.js', 'Express.js', 'Deno', 'Python', 'Django', 'Flask', 'FastAPI',
    'Ruby', 'Ruby on Rails', 'C#', 'ASP.NET', 'Swift', 'iOS Development',
    'Java', 'Spring Boot', 'Kotlin', 'Android Development',
    'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite', 'DynamoDB',
    'RESTful APIs', 'GraphQL', 'Apollo Server', 'Apollo Client', 'Prisma',
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SourceTree', 'GitKraken',
    'Visual Studio Code', 'Sublime Text', 'Atom', 'Eclipse', 'IntelliJ IDEA',
    'Docker', 'Kubernetes', 'Vagrant', 'Heroku', 'AWS', 'Azure', 'Google Cloud Platform',
    'CI/CD', 'Jenkins', 'Travis CI', 'CircleCI', 'GitHub Actions',
    'Agile', 'Scrum', 'Kanban', 'JIRA', 'Confluence', 'Trello',
    'Responsive Design', 'SASS', 'LESS', 'Bootstrap', 'Tailwind CSS', 'Materialize',
    'WebSockets', 'WebRTC', 'RxJS', 'Redux', 'Vuex', 'MobX', 'Ngrx',
    'Jest', 'Mocha', 'Chai', 'Cypress', 'Testing Library', 'Enzyme', 'Storybook',
    'Webpack', 'Rollup', 'Parcel', 'Babel', 'ESLint', 'Prettier', 'Husky',
    'OAuth', 'JWT', 'OpenID Connect', 'Authentication', 'Authorization',
    'Microservices', 'Serverless', 'Distributed Systems', 'Service Mesh',
    'Design Patterns', 'Clean Code', 'Code Review', 'Continuous Learning',
    'Problem Solving', 'Debugging', 'Agile Development', 'Pair Programming',
    'Version Control', 'Git Flow', 'GitHub Flow', 'Linux', 'Bash', 'Shell Scripting',
    'Machine Learning', 'Data Science', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch',
    'Big Data', 'Hadoop', 'Spark', 'Apache Flink', 'Blockchain', 'Smart Contracts',
    'Cryptocurrency', 'Solidity', 'AR/VR', 'Unity', 'Unreal Engine', 'Blender',
    'UI/UX Design', 'Figma', 'Sketch', 'Adobe XD', 'InVision',
    'Technical Writing', 'Blogging', 'Content Creation', 'Public Speaking',
    'Open Source Contribution', 'Community Building'
  ];

  private inValidate(formName: string): void {
    switch (formName) {
      case 'skills':
        if (this.formDetails.controls['skills']?.status === 'INVALID') {
          this.validation.skills = true;
          break;
        }
        this.validation.skills = false;
        break;

      case 'serniority':
        if (this.formDetails.controls['serniority']?.status === 'INVALID') {
          this.validation.serniority = true;
          break;
        }
        this.validation.serniority = false;
        break;

      case 'vacancyArea':
        if (this.formDetails.controls['vacancyArea']?.status === 'INVALID') {
          this.validation.vacancyArea = true;
          break;
        }
        this.validation.vacancyArea = false;
        break;

      case 'modality':
        if (this.formDetails.controls['modality']?.status === 'INVALID') {
          this.validation.modality = true;
          break;
        }
        this.validation.modality = false;
        break;

      case 'daysOfWeek':
        if ((this.formDetails.controls['daysOfWeek']?.status === 'INVALID' || !this.daysOfWeek || this.daysOfWeek.length === 0) && this.modality !== 'remoto') {
          this.validation.daysOfWeek = true;
          break;
        }
        this.validation.daysOfWeek = false;
        break;

      case 'contract':
        if (this.formDetails.controls['contract']?.status === 'INVALID') {
          this.validation.contract = true;
          break;
        }
        this.validation.contract = false;
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

      case 'expirationDate':
        if (this.formDetails.controls['expirationDate']?.status === 'INVALID' || this.dateInvalid()) {
          this.validation.expirationDate = true;
          break;
        }
        this.validation.expirationDate = false;
        break;

      default:
        console.log('erro')
    }
  }

  private dateInvalid(): boolean {
    try {
      this.mesageError = ''

      const partesData = this.expirationDate.split('-');
      const year = parseInt(partesData[0], 10);
      const month = parseInt(partesData[1], 10);
      const day = parseInt(partesData[2], 10);

      if (year.toString().length !== 4) {
        this.mesageError = 'Erro ao validar a data';
        return true;
      }

      const expirationDate = new Date(year, month - 1, day);
      const today = new Date();

      expirationDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const compare = (expirationDate.getTime() < today.getTime()) && (expirationDate.getTime() !== today.getTime());

      if (compare) {
        this.mesageError = 'A data inserida é anterior à data de hoje';
        return true;
      }
      else {
        this.mesageError = '';
        if (
          expirationDate.getFullYear() === year &&
          expirationDate.getMonth() === month - 1 &&
          expirationDate.getDate() === day
        ) {
          return false;
        }
        else {
          this.mesageError = 'Formato de data inválido';
          return true;
        }
      }
    } catch (error) {
      this.mesageError = 'Erro ao validar a data';
      return true;
    }
  }

  onAddSkill(skill: string): void {
    this.skillsInput = ''

    if (this.skills) {
      let index = this.skills.indexOf(skill);

      if (index === -1) {
        this.skills?.push(skill)
      }
    }
  }

  onRemoveSkill(skill: string): void {
    this.skills = this.skills?.filter(element => element !== skill)
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
    this.formDetails.get('skills')?.setValue(this.skills as any);
    this.formDetails.get('serniority')?.setValue(this.serniority as any);
    this.formDetails.get('vacancyArea')?.setValue(this.vacancyArea as any);
    this.formDetails.get('modality')?.setValue(this.modality as any);
    this.formDetails.get('daysOfWeek')?.setValue(this.daysOfWeek as any);
    this.formDetails.get('contract')?.setValue(this.contract as any);
    this.formDetails.get('period')?.setValue(this.period as any);
    this.formDetails.get('shift')?.setValue(this.shift as any);
    this.formDetails.get('expirationDate')?.setValue(this.expirationDate as any);

    const vacancy: any = this.vacancyService.getVacancy();

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

      this.vacancyService.insertDetails(this.skills as string[], this.serniority as string, this.vacancyArea as string, this.modality as string, this.daysOfWeek as string[], this.contract as string, this.period as string, this.shift as string, this.expirationDate as string)

      this.router.navigateByUrl("/create-vacancy/create");
    }
  }

  ngOnInit() {
    const vacancy = this.vacancyService.getVacancy()

    if (vacancy.title === undefined || '' && vacancy.description === undefined || '') {
      this.router.navigateByUrl("/create-vacancy");
    } else {
      this.validation = {};

      this.daysOfWeek = [];
      this.skills = [];
      this.vacancyArea = '';
      this.modality = '';
      this.contract = '';
      this.period = '';
      this.serniority = '';
      this.shift = '';

    }
  }
}