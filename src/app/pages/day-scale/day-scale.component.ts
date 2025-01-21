import { Component } from '@angular/core';
import { TitleComponent } from '../../../ui/components/title/title.component';
import { MinisteryScaleCardComponent } from '../../../ui/components/ministery-scale-card/ministery-scale-card.component';

@Component({
  selector: 'app-day-scale',
  imports: [TitleComponent, MinisteryScaleCardComponent],
  templateUrl: './day-scale.component.html',
  styleUrl: './day-scale.component.scss'
})
export class DayScalePage {}
