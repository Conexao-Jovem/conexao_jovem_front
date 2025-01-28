import { Component, Input } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { StatusLabelComponent } from "../status-label/status-label.component";

import { MinisterysCardAccordionComponent } from "../ministerys-card-accordion/ministerys-card-accordion.component";

@Component({
  selector: 'app-accordion-calendar',
  imports: [LucideAngularModule, StatusLabelComponent, MinisterysCardAccordionComponent],
  templateUrl: './accordion-calendar.component.html',
  styleUrl: './accordion-calendar.component.scss'
})
export class AccordionCalendarComponent {
  readonly DropdownIcon = ChevronDown
  @Input() date: string = '';

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
