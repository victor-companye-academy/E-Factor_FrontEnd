import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public isActive = [false, false, false, false, false];

  activateLink(index: number){
    this.isActive = [false, false, false, false, false]
    this.isActive[index] = true;
  }
}
