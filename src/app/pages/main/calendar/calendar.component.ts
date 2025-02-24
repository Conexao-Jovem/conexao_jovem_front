import { Component } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { ToggleComponent } from '../../../../ui/components/toggle/toggle.component';
import { AccordionCalendarComponent } from '../../../../ui/components/accordion-calendar/accordion-calendar.component';
import { EventCardComponent } from '../../../../ui/components/event-card/event-card.component';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  imports: [TitleComponent, ToggleComponent, AccordionCalendarComponent, EventCardComponent, ButtonComponent, LucideAngularModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  activeView: 'scales' | 'events' = 'scales';
  date: Date = new Date();
  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';
  readonly PlusIcon = Plus;

  constructor(private router: Router) {}

  showScales() {
    this.activeView = 'scales';
  }

  redirectToNewContent() {
    if (this.activeView === 'scales') {
      this.router.navigate(['/main/calendar/scale/new']);
      return;
    }

    this.router.navigate(['/main/calendar/event/new']);
  }

  showEvents() {
    this.activeView = 'events';
  }
}
