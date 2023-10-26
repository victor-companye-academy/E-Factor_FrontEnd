import { Component } from '@angular/core';
import { SidebarLinks } from 'src/app/core/interfaces/sidebar-links';

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

  protected arrayLinksSidebar: Array<SidebarLinks> = [
    {
      title: "Página inicial",
      parameters: ['', 'assets/icons/sidebar/pagina-inicial.svg']
    },
    {
      title: "Profissionais",
      parameters: ['/professionals', 'assets/icons/sidebar/profissionais.svg']
    },
    {
      title: "Vagas",
      parameters: ['/vacancies', 'assets/icons/sidebar/vagas.svg']
    },
    {
      title: "Novidades",
      parameters: ['/newsletter', 'assets/icons/sidebar/novidades.svg']
    },
    {
      title: "Sobre",
      parameters: ['/about', 'assets/icons/sidebar/sobre.svg']
    }
  ]
}
