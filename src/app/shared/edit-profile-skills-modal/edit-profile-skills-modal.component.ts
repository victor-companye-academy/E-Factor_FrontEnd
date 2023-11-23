import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-skills-modal',
  templateUrl: './edit-profile-skills-modal.component.html',
  styleUrls: ['./edit-profile-skills-modal.component.scss']
})
export class EditProfileSkillsModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;
  protected searchText: string = '';
  protected filteredSkills: Array<string> = [];
  protected errMsg: string = '';

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

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    this.saveChanges.emit(this.editedProfile[0].skills);
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

  filterSkills() {
    if (!this.searchText) {
      this.filteredSkills = [];
      return;
    }

    this.filteredSkills = this.skillsList.filter(skill =>
      skill.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

  getHighlightedText(skill: string): string {
    const index = skill.toLowerCase().indexOf(this.searchText.toLowerCase());
    if (index >= 0) {
      const prefix = skill.substring(0, index);
      const highlighted = skill.substring(index, index + this.searchText.length);
      const suffix = skill.substring(index + this.searchText.length);
      return `${prefix}<strong>${highlighted}</strong>${suffix}`;
    } else {
      return skill;
    }
  }

  addSkill(skill: string) {
    if (this.editedProfile[0].skills.includes(skill)) {
      this.errMsg = "A habilidade escolhida já existe em sua lista de habilidades.";
      return;
    }
    this.editedProfile[0].skills.push(skill);
    this.errMsg = '';
    this.searchText = '';
    this.filteredSkills = [];
  }

  deleteSkill(i: number) {
    this.editedProfile[0].skills.splice(i, 1);
  }
}
