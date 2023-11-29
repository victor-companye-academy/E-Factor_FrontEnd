import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-education-modal',
  templateUrl: './edit-profile-education-modal.component.html',
  styleUrls: ['./edit-profile-education-modal.component.scss']
})
export class EditProfileEducationModalComponent {
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
    for (let i = 0; i < this.editedProfile.education.length; i++) {
      if (this.editedProfile.education[i].current) {
        this.editedProfile.education[i].end = '';
      }
      if (this.editedProfile.education[i].end == '') {
        this.editedProfile.education[i].current = true;
      }
    }

    this.organizeEducation();

    this.saveChanges.emit(this.editedProfile.education);
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

  addEducation() {
     this.editedProfile.education.unshift({ institution: '', start: '', end: '', current: false, role: '', description: '' });
     this.editedProfile = JSON.parse(JSON.stringify(this.editedProfile));
     this.isValid = false;
  }

  deleteEducation(i: number) {
    this.editedProfile.education.splice(i, 1);
  }

  selectCurrent(i: number){
    if (this.editedProfile.education[i].current) {
      this.editedProfile.education[i].current = false;
    } else {
      this.editedProfile.education[i].current = true;
      this.editedProfile.education[i].end = '';
    }
  }

  verifyEducation() {
    for (let i = 0; i < this.editedProfile.education.length; i++) {
      const education = this.editedProfile.education[i];
      const { institution, start, title, description, end, current } = education;

      if (!institution || !start || !title || !description) {
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

  organizeEducation() {
    this.editedProfile.education.sort((a: any, b: any) => {
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
