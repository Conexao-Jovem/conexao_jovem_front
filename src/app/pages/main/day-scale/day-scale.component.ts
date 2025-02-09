import { Component } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { MinisteryCardComponent } from '../../../../ui/components/ministery-card/ministery-card.component';

@Component({
  selector: 'app-day-scale',
  imports: [TitleComponent, MinisteryCardComponent],
  templateUrl: './day-scale.component.html',
  styleUrl: './day-scale.component.scss'
})
export class DayScalePage {}
