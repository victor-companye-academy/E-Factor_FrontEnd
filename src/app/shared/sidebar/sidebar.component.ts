import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarLinks } from 'src/app/core/interfaces/sidebar-links';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isAdm: boolean;
  role: string;

  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);

      }
    });
    const url = window.location.href;
    this.isAdm = url.includes("admin");
    this.role = this.authService.getRole();
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
    },
    {
      title: "Criar vaga",
      parameters: ['/create-vacancy', 'assets/icons/sidebar/plus.svg']
    },
    {
      title: "Extrato",
      parameters: ['/extract', 'assets/icons/sidebar/extrato.svg']
    }
  ]

  protected arrayLinksAdminSidebar: Array<SidebarLinks> = [
    {
      title: "Página inicial",
      parameters: ['/admin/', 'assets/icons/sidebar/pagina-inicial.svg']
    },
    {
      title: "Profissionais",
      parameters: ['/admin/professionals-list', 'assets/icons/sidebar/profissionais.svg']
    },
    {
      title: "Empresas",
      parameters: ['/admin/business-list', 'assets/icons/sidebar/empresas.svg']
    },
    {
      title: "Vagas",
      parameters: ['/admin/vacancys-list', 'assets/icons/sidebar/vagas.svg']
    },
    {
      title: "Solicitações",
      parameters: ['/admin/solicitations-list', 'assets/icons/sidebar/solicitacoes.svg']
    },
  ]

  isCollapsed = window.innerWidth < 991;
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.isCollapsed = window.innerWidth < 991;
  }
}
