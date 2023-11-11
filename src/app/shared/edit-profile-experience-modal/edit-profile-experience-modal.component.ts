import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-experience-modal',
  templateUrl: './edit-profile-experience-modal.component.html',
  styleUrls: ['./edit-profile-experience-modal.component.scss']
})
export class EditProfileExperienceModalComponent {
  @Input() profile: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();

  protected editedProfile: any;

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    for (let i = 0; i < this.editedProfile[0].experience.length; i++) {
      if (this.editedProfile[0].experience[i].current) {
        this.editedProfile[0].experience[i].end = '';
      }
      if (this.editedProfile[0].experience[i].end == '') {
        this.editedProfile[0].experience[i].current = true;
      }
    }
    this.saveChanges.emit(this.editedProfile[0].experience);
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

  getAnoOptions(): number[] {
    const startYear = 2000;
    const currentYear = new Date().getFullYear();
    const years = [];
  
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
  
    return years;
  }

  addExperience() {
     this.editedProfile[0].experience.unshift({ institution: '', start: '', end: '', current: false, role: '', description: '' });
     this.editedProfile = JSON.parse(JSON.stringify(this.editedProfile));
  }

  deleteExperience(i: number) {
    this.editedProfile[0].experience.splice(i, 1);
  }

  selectInputStartMonth(event: any, i: number) {
    this.editedProfile[0].experience[i].start = event.target.value + ' ' + this.editedProfile[0].experience[i].start.split(' ')[1];
  }

  selectInputStartYear(event: any, i: number) {
    this.editedProfile[0].experience[i].start = this.editedProfile[0].experience[i].start.split(' ')[0] + ' ' + event.target.value;
  }

  selectInputEndMonth(event: any, i: number) {
    this.editedProfile[0].experience[i].end = event.target.value + ' ' + this.editedProfile[0].experience[i].end.split(' ')[1];
  }

  selectInputEndYear(event: any, i: number) {
    this.editedProfile[0].experience[i].end = this.editedProfile[0].experience[i].end.split(' ')[0] + ' ' + event.target.value;
  }

  selectCurrent(i: number){
    if (this.editedProfile[0].experience[i].current) {
      this.editedProfile[0].experience[i].current = false;
    } else {
      this.editedProfile[0].experience[i].current = true;
    }
  }
}
