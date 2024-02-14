import { Component, Input } from '@angular/core';
import { Vacancy } from 'src/app/core/interfaces/vacancy';

@Component({
  selector: 'card-vacancy',
  templateUrl: './card-vacancy.component.html',
  styleUrls: ['./card-vacancy.component.scss']
})
export class CardVacancyComponent {
  @Input({ alias: 'short' }) public isShort?: boolean;
  @Input({ alias: 'card' }) public card?: Vacancy;
  @Input({ alias: 'isLogged' }) public isLogged?: boolean;

  protected differenceInDays!: string;

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
    else if (differenceInDays > 1 &&  differenceInDays <= 7 ) {
      return 'Dias atrás';
    }
    else if (differenceInDays >= 7) {
      const weeks = Math.floor(differenceInDays / 7);

      if (weeks <= 2) {
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
  
  onImageError(event: any) {
    event.target.src = 'assets/imgs/default-profile.svg'; // Define o src para a imagem padrão
  }

  ngOnInit() {
    
    if (!this.card!.nomeEmpresa){

      this.card!.status = this.card?.ativo;
      
      this.card!.nomeEmpresa = this.card!.nomeFantasia || 'Nome da empresa';
      this.card!.tituloVaga = this.card!.titulo || 'Título da vaga';
      this.card!.descricaoVaga = this.card!.descricao || 'Descricão da vaga';
      
      this.card!.horaInclusao = this.card!.dataInclusaoVaga || 'Data de inclusão';

      if (this.card!.dataInclusaoVaga) {
        const dataInteresse = new Date(this.card!.dataInclusaoVaga!);
        const dia = String(dataInteresse.getDate()).padStart(2, '0');
        const mes = String(dataInteresse.getMonth() + 1).padStart(2, '0');
        const ano = dataInteresse.getFullYear();
        
        // Obter hora e minutos
        const horas = String(dataInteresse.getHours()).padStart(2, '0');
        const minutos = String(dataInteresse.getMinutes()).padStart(2, '0');
        
        // Formatar a data para "DD/MM/YYYY HH:mm"
        this.card!.horaInclusao = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
      }
  
      if (this.card && this.card.endereco) {
        this.card.endereco.estado = this.card.estado || 'UF';
        this.card.endereco.cidade = this.card.cidade || 'Cidade';
      }
    }

    this.differenceInDays = this.onDays();
  }
}
