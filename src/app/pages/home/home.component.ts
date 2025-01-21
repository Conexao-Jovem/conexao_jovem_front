import { Component } from '@angular/core';
import { TitleComponent } from '../../../ui/components/title/title.component';
import { EventCardComponent } from '../../../ui/components/event-card/event-card.component';
import { MinisteryScaleCardComponent } from '../../../ui/components/ministery-scale-card/ministery-scale-card.component';

@Component({
  selector: 'app-home',
  imports: [TitleComponent, EventCardComponent, MinisteryScaleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePage {
  date: Date = new Date();
  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';
}
