import { Component } from '@angular/core';
import { MenuFooter } from 'src/app/core/interfaces/menu-footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  protected arrayMenu: Array<MenuFooter> = [
    {
      title: "Empresa",
      routers: [['/create-vacancy', 'Criar vaga'], ['/search-professionals', 'Buscar profissional'], ['/login', 'Criar conta']]
    },
    {
      title: "Profissional",
      routers: [['/search-vacancies', 'Buscar vaga'], ['/login', 'Criar conta']]
    },
    {
      title: "Outros",
      routers: [['/newsletter', 'Novidades'], ['/about', 'Sobre']]
    }
  ];
}
