import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.scss']
})
export class ChooseUserComponent {

  public isActiveArray: Array<boolean> = [false, false, false];

  public isActive(index: number){
    this.isActiveArray[0] = false; this.isActiveArray[1] = false;
    this.isActiveArray[index] = true; this.isActiveArray[2] = true;
  }
}
