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
    for (let i = 0; i < this.editedProfile[0].experience.length; i++) {
      if (this.editedProfile[0].experience[i].current) {
        this.editedProfile[0].experience[i].end = '';
      }
      if (this.editedProfile[0].experience[i].end == '') {
        this.editedProfile[0].experience[i].current = true;
      }
    }

    this.organizeExperience();

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

  getMonthOptions(): string[] {
    return ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
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
     this.isValid = false;
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

  verifyExperience() {
    for (let i = 0; i < this.editedProfile[0].experience.length; i++) {
      if (this.editedProfile[0].experience[i].institution == '' ||
          this.editedProfile[0].experience[i].start.length < 8 ||
          this.editedProfile[0].experience[i].start.split(' ')[1] == 'undefined' ||
          this.editedProfile[0].experience[i].role == '' ||
          this.editedProfile[0].experience[i].description == '') {
        return this.isValid = false;
      }
    }
    return this.isValid = true;
  }

  organizeExperience() {
    this.editedProfile[0].experience.sort((a: any, b: any) => {
      if (a.current && !b.current) {
        return -1;
      } else if (!a.current && b.current) {
        return 1;
      } else if (parseInt(a.end.split(' ')[1]) > parseInt(b.end.split(' ')[1])) {
        return -1;
      } else if (parseInt(a.end.split(' ')[1]) < parseInt(b.end.split(' ')[1])) {
        return 1;
      } else {
        let monthAStart = 0;
        let monthAEnd = 0;
        this.getMonthOptions().forEach((month: string, index: number) => {
          if (a.start.split(' ')[0] == month) {
            monthAStart = index;
          }
          if (a.end.split(' ')[0] == month) {
            monthAEnd = index;
          }
        })
        let monthBStart = 0; 
        let monthBEnd = 0; 
        this.getMonthOptions().forEach((month: string, index: number) => {
          if (b.start.split(' ')[0] == month) {
            monthBStart = index;
          }
          if (b.end.split(' ')[0] == month) {
            monthBEnd = index;
          }
        })

        if (a.current && b.current){
          if (monthAStart > monthBStart) {
            return -1;
          } else if (monthAStart < monthBStart) {
            return 1;
          } else {
            if (parseInt(a.start.split(' ')[1]) > parseInt(b.start.split(' ')[1])) {
              return -1;
            } else if (parseInt(a.start.split(' ')[1]) < parseInt(b.start.split(' ')[1])) {
              return 1;
            } else {
              return 0;
            }
          }
        } else {
          if (monthAEnd > monthBEnd) {
            return -1;
          } else if (monthAEnd < monthBEnd) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    });
  }
}
