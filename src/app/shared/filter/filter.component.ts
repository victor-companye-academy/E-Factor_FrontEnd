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

  onCheckboxChange(checkboxName: string): void {
    Object.keys(this.filterGroup.controls).forEach(controlName => {
      if (controlName !== checkboxName && (controlName !== 'javascript' && controlName !== 'typescript' && controlName !== 'angular' && controlName !== 'html' && controlName !== 'otherPosition' && controlName !== 'otherSkill')) {

        console.log(controlName)

        this.filterGroup.get(controlName)?.setValue("");
      }
    });
  }

  onSubmit(): void {
    this.sendData.emit(this.filterGroup.value);
  }
}
