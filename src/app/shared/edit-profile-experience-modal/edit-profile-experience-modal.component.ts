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
  protected isValid: boolean = true;

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.classList.add('blur-background');
    }
  }

  onSubmit() {
    this.closeModal.emit(true);
    for (let i = 0; i < this.editedProfile.experience.length; i++) {
      if (this.editedProfile.experience[i].current) {
        this.editedProfile.experience[i].end = '';
      }
      if (this.editedProfile.experience[i].end == '') {
        this.editedProfile.experience[i].current = true;
      }
    }

    this.organizeExperience();

    this.saveChanges.emit(this.editedProfile.experience);
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

  addExperience() {
     this.editedProfile.experience.unshift({ institution: '', start: '', end: '', current: false, role: '', description: '' });
     this.editedProfile = JSON.parse(JSON.stringify(this.editedProfile));
     this.isValid = false;
  }

  deleteExperience(i: number) {
    this.editedProfile.experience.splice(i, 1);
  }

  selectCurrent(i: number){
    if (this.editedProfile.experience[i].current) {
      this.editedProfile.experience[i].current = false;
    } else {
      this.editedProfile.experience[i].current = true;
      this.editedProfile.experience[i].end = '';
    }
  }

  verifyExperience() {
    for (let i = 0; i < this.editedProfile.experience.length; i++) {
      const experience = this.editedProfile.experience[i];
      const { institution, start, role, description, end, current } = experience;

      if (!institution || !start || !role || !description) {
        return this.isValid = false;
      }

      if (!current && (!end)) {
        return this.isValid = false;
      }
      
      if (new Date(start) > new Date(end)) {
        return this.isValid = false;
      }

      if (new Date(start) > new Date() || new Date(end) > new Date()) {
        return this.isValid = false;
      }
    }

    return this.isValid = true;
  }

  organizeExperience() {
    this.editedProfile.experience.sort((a: any, b: any) => {
      if (a.current && !b.current) {
        return -1;
      } else if (!a.current && b.current) {
        return 1;
      } else {
        if (new Date(a.end) > new Date(b.end)) {
          return -1;
        } else if (new Date(a.end) < new Date(b.end)) {
          return 1;
        } else {
          if (new Date(a.start) > new Date(b.start)) {
            return -1;
          } else if (new Date(a.start) < new Date(b.start)) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    });
  }
}
