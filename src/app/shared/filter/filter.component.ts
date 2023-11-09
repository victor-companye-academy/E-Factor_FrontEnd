import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  filterGroup = new FormGroup({
    javascript: new FormControl(false),
    typescript: new FormControl(false),
    angular: new FormControl(false),
    html: new FormControl(false),
    otherSkill: new FormControl(''),

    //outros cargos
    estagio: new FormControl(false),
    junior: new FormControl(false),
    pleno: new FormControl(false),
    senior: new FormControl(false),
    otherPosition: new FormControl(''),
    
  })

  onSubmit() {
    console.warn(this.filterGroup.value);
  }
}
