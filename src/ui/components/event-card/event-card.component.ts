import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() date: Date = new Date();
  @Input() maxMembers?: number;
  @Input() currentMembers?: number = 34;
  @Input() title: string = '';
  @Input() description?: string;
  @Input() imgUrl: string = '';

  getMonthNameByNumber(month: number): string {
    switch (month) {
      case 0:
        return 'Janeiro';
      case 1:
        return 'Fevereiro';
      case 2:
        return 'Março';
      case 3:
        return 'Abril';
      case 4:
        return 'Maio';
      case 5:
        return 'Junho';
      case 6:
        return 'Julho';
      case 7:
        return 'Agosto';
      case 8:
        return 'Setembro';
      case 9:
        return 'Outubro';
      case 10:
        return 'Novembro';
      case 11:
        return 'Dezembro';
      default:
        throw new Error('Mês inválido. Por favor, forneça um número entre 0 e 11.');
    }
  }
}
