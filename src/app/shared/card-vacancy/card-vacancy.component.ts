import { Component, Input } from '@angular/core';
import { Vacancy } from 'src/app/core/interfaces/vacancy';
import { formattedDate } from 'src/app/core/utils/formattedDate';

@Component({
  selector: 'card-vacancy',
  templateUrl: './card-vacancy.component.html',
  styleUrls: ['./card-vacancy.component.scss']
})
export class CardVacancyComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?: Vacancy;

  protected differenceInDays!: string;;

  onDays(): string {
    const date = this.card?.horaInclusao;

    const year = parseInt(date?.slice(6) as string);
    const month = parseInt(date?.slice(3, 5) as string) - 1;
    const day = parseInt(date?.slice(0, 2) as string);

    const days = (1000 * 60 * 60 * 24);

    const decimalNumber = (new Date().getTime() - new Date(year, month, day).getTime()) / days;
    const differenceInDays = Math.floor(decimalNumber);

    if (differenceInDays === 0) {
      return 'Hoje';
    }
    else if (differenceInDays === 1) {
      return 'Ontem';
    }
    else if (differenceInDays === 7) {
      return 'Há Uma semana atrás';
    }
    else if (differenceInDays > 7) {
      const weeks = Math.floor(differenceInDays / 7);

      if (weeks < 2) {
        return 'Há Uma semana atrás';
      } 
      else {
        return `${weeks} semanas atrás`;
      }
    }
    else if ((differenceInDays === 30 && month === 4 || month === 6 || month === 9 || month === 11)
      ||
      ((differenceInDays === 28 || differenceInDays === 29) && month === 2) && differenceInDays < 32) {
      return 'Um mês atrás';
    }
    else if (differenceInDays > 31) {
      return `${Math.floor(differenceInDays / 30.44)} meses atrás`;
    } else {
      return 'Sem diferença significativa';
    }
  }
  
  onImageError() {
    // Se ocorrer um erro ao carregar a imagem, define o src para a imagem padrão
    if (this.card) {
      this.card.fotoPerfil = 'assets/imgs/default-profile.svg';
    }
  }

  ngOnInit() {
    this.differenceInDays = this.onDays()
  }
}
