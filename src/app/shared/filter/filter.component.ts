import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() protected sendData = new EventEmitter;

  protected filterGroup = new FormGroup({
    javascript: new FormControl(false),
    typescript: new FormControl(false),
    angular: new FormControl(false),
    html: new FormControl(false),
    otherSkill: new FormControl(''),

    estagio: new FormControl(''),
    junior: new FormControl(''),
    pleno: new FormControl(''),
    senior: new FormControl(''),
    otherPosition: new FormControl(''),
  })

  onCheckboxPositionClean(): void {
    this.filterGroup.get('estagio')?.setValue('')
    this.filterGroup.get('junior')?.setValue('')
    this.filterGroup.get('pleno')?.setValue('')
    this.filterGroup.get('senior')?.setValue('')
  }
  oninputTextPositionClean(): void {
    this.filterGroup.get('otherPosition')?.setValue('')
  }

  onCheckboxChange(checkboxName: string): void {
    Object.keys(this.filterGroup.controls).forEach(controlName => {
      if (controlName !== checkboxName && (controlName !== 'javascript' && controlName !== 'typescript' && controlName !== 'angular' && controlName !== 'html' && controlName !== 'otherPosition' && controlName !== 'otherSkill')) {
        this.filterGroup.get(controlName)?.setValue("");
      }
    });
  }

  onSubmit(): void {
    window.scrollTo(0, 120);
    this.sendData.emit(this.filterGroup.value);
  }
}
