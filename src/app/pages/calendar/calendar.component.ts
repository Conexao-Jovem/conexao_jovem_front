import { Component } from '@angular/core';
import { TitleComponent } from "../../../ui/components/title/title.component";
import { ToggleComponent } from "../../../ui/components/toggle/toggle.component";
import { AccordionCalendarComponent } from "../../../ui/components/accordion-calendar/accordion-calendar.component";
import { EventCardComponent } from "../../../ui/components/event-card/event-card.component";

@Component({
  selector: 'app-calendar',
  imports: [TitleComponent, ToggleComponent, AccordionCalendarComponent, EventCardComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  activeView: 'scales' | 'events' = 'scales'; // Valor inicial
 date: Date = new Date();
  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';

  showScales() {
    this.activeView = 'scales';
  }

  showEvents() {
    this.activeView = 'events';
  }
}
