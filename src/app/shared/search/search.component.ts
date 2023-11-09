import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchGroup = new FormGroup({
    otherSkill: new FormControl(''),

    //outros cargos
    otherPosition: new FormControl(''),

  })

  onSubmit() {

    console.warn(this.searchGroup.value);
  }

}
