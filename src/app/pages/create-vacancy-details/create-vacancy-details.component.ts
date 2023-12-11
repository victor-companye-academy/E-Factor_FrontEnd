import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  protected FilteredItems!: any[];

  protected skills: string[] | undefined;
  protected serniority: string | undefined;
  protected vacancyArea: string | undefined;
  protected modality: string | undefined;
  protected daysOfWeek!: string[] | undefined;
  protected contract: string | undefined;
  protected period: string | undefined;
  protected shift: string | undefined;

  protected isInValid: any;
  protected vacancyData: any;


  protected formDetails = new FormGroup({
    skills: new FormControl('', [Validators.nullValidator, Validators.required]),
    serniority: new FormControl('', [Validators.nullValidator, Validators.required]),
    vacancyArea: new FormControl('', [Validators.nullValidator, Validators.required]),
    modality: new FormControl('', [Validators.nullValidator, Validators.required]),
    daysOfWeek: new FormControl(''),
    contract: new FormControl('', [Validators.nullValidator, Validators.required]),
    period: new FormControl('', [Validators.nullValidator, Validators.required]),
    shift: new FormControl('', [Validators.nullValidator, Validators.required]),
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
          this.isInValid.skills = true;
          break;
        }
        this.isInValid.skills = false;
        break;


      case 'serniority':
        if (this.formDetails.controls['serniority']?.status === 'INVALID') {
          this.isInValid.serniority = true;
          break;
        }
        this.isInValid.serniority = false;
        break;

      case 'vacancyArea':
        if (this.formDetails.controls['vacancyArea']?.status === 'INVALID') {
          this.isInValid.vacancyArea = true;
          break;
        }
        this.isInValid.vacancyArea = false;
        break;

      case 'modality':
        if (this.formDetails.controls['modality']?.status === 'INVALID') {
          this.isInValid.modality = true;
          break;
        }
        this.isInValid.modality = false;
        break;

      case 'daysOfWeek':
        if (this.formDetails.controls['daysOfWeek']?.status === 'INVALID' || !this.daysOfWeek || this.daysOfWeek.length === 0) {
          this.isInValid.daysOfWeek = true;
          break;
        }
        this.isInValid.daysOfWeek = false;
        break;

      case 'contract':
        if (this.formDetails.controls['contract']?.status === 'INVALID') {
          this.isInValid.contract = true;
          break;
        }
        this.isInValid.contract = false;
        break;

      case 'period':
        if (this.formDetails.controls['period']?.status === 'INVALID') {
          this.isInValid.period = true;
          break;
        }
        this.isInValid.period = false;
        break;

      default:

      case 'shift':
        if (this.formDetails.controls['shift']?.status === 'INVALID') {
          this.isInValid.shift = true;
          break;
        }
        this.isInValid.shift = false;
        break;
    }
  }

  searchSkills(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.skillsList as any[]).length; i++) {
      let skill = (this.skillsList as any[])[i];
      if (skill.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(skill);
      }
    }

    this.FilteredItems = filtered;
  }

  onSubmit() {

    this.formDetails.get('skills')?.setValue(this.skills as any)
    this.formDetails.get('serniority')?.setValue(this.serniority as any)
    this.formDetails.get('vacancyArea')?.setValue(this.vacancyArea as any)
    this.formDetails.get('modality')?.setValue(this.modality as any)
    this.formDetails.get('daysOfWeek')?.setValue(this.daysOfWeek as any)
    this.formDetails.get('contract')?.setValue(this.contract as any)
    this.formDetails.get('period')?.setValue(this.period as any)
    this.formDetails.get('shift')?.setValue(this.shift as any)

    const vacancy = this.vacancyService.getVacancy()

    for (let key in this.formDetails.controls) {
      this.inValidate(key);
    }

    if ((vacancy.title === undefined || '' && vacancy.description === undefined || '') && this.formDetails.valid) {
      this.router.navigateByUrl("/create-vacancy");
    }

    if (this.formDetails.valid && vacancy) {
      this.vacancyService.insertDetails(this.skills as string[], this.serniority as string, this.vacancyArea as string, this.modality as string, this.daysOfWeek as string[], this.contract as string, this.period as string, this.shift as string)

      this.router.navigateByUrl("/create-vacancy/create");


    }
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

  ngOnInit() {
    const vacancy = this.vacancyService.getVacancy()
    
    if (vacancy.title === undefined || '' && vacancy.description === undefined || '') {
      this.router.navigateByUrl("/create-vacancy");
    } else {
      this.isInValid = {};

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