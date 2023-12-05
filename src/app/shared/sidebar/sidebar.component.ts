import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarLinks } from 'src/app/core/interfaces/sidebar-links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  protected arrayLinksSidebar: Array<SidebarLinks> = [
    {
      title: "Página inicial",
      parameters: ['', 'assets/icons/sidebar/pagina-inicial.svg']
    },
    {
      title: "Profissionais",
      parameters: ['/search-professionals', 'assets/icons/sidebar/profissionais.svg']
    },
    {
      title: "Vagas",
      parameters: ['/search-vacancies', 'assets/icons/sidebar/vagas.svg']
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

  isCollapsed = false;
}
