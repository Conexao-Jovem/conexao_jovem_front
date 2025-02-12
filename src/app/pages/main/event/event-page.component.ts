import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { CalendarDays, LucideAngularModule, MapPin, MoveLeft, Ticket, X } from 'lucide-angular';

@Component({
  selector: 'app-event-page',
  imports: [ButtonComponent, LucideAngularModule],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPage {
  readonly XIcon = X;
  readonly BackIcon = MoveLeft;
  readonly Calendar = CalendarDays;
  readonly Map = MapPin;
  readonly Ticket = Ticket;

  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';
  imgUrl2: string = 'https://github.com/Conexao-Jovem.png';
}
