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
      routers: [['/criar-vaga', 'Criar vaga'], ['/buscar-profissional', 'Buscar profissional'], ['/criar-conta', 'Criar conta']]
    },
    {
      title: "Profissional",
      routers: [['/buscar-vaga', 'Buscar vaga'], ['/criar-conta', 'Criar conta']]
    },
    {
      title: "Outros",
      routers: [['/novidades', 'Novidades'], ['/sobre', 'Sobre']]
    }
  ];
}
