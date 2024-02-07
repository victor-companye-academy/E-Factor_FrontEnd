import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarLinks } from 'src/app/core/interfaces/sidebar-links';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { UtilService } from 'src/app/core/service/util/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  isAdm: boolean;
  role: string;
  userName: string = '';
  profilePicture: string = '';
  idEmpresaLogada: number = -1;

  constructor(private router: Router, private authService: AuthService, private utilService: UtilService) {

    const url = window.location.href;
    this.role = this.authService.getRole();
    this.isAdm = this.role == 'ADMINISTRADOR';

    if (this.router.url == '/' && this.isAdm){
      this.router.navigate(['/admin']);
    }

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.utilService.userName$.subscribe((name: string) => {
      this.userName = name;
    });
    this.utilService.profilePicture$.subscribe((picture: string) => {
      // this.profilePicture = `data:image/png;base64,${picture}`
      this.profilePicture = picture
    })
    this.utilService.businessId$.subscribe((id: number) => {
      this.idEmpresaLogada = id
    })
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

  getLinkDestination() {
    if (this.role == 'PROFISSIONAL') {
      this.router.navigate(['/professional-profile', this.authService.getId()]);
    } else if (this.role.includes('GESTOR')) {
      if(this.idEmpresaLogada == -1) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/business-profile', this.idEmpresaLogada]);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
