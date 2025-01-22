import { Component } from '@angular/core';
import { TitleComponent } from "../../../ui/components/title/title.component";
import { ToggleComponent } from "../../../ui/components/toggle/toggle.component";
import { AccordionCalendarComponent } from "../../../ui/components/accordion-calendar/accordion-calendar.component";

@Component({
  selector: 'app-calendar',
  imports: [TitleComponent, ToggleComponent, AccordionCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
