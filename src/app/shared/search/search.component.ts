import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public sendData = new EventEmitter;

  searchGroup = new FormGroup({
    otherSkill: new FormControl(''),
    otherPosition: new FormControl(''),

  })

  onSubmit() {
    this.sendData.emit(this.searchGroup.value)
  }
  ngOnInit() { 
    this.onSubmit()
  }
}
