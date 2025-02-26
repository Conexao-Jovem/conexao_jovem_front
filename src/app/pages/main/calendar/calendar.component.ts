import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { ToggleComponent } from '../../../../ui/components/toggle/toggle.component';
import { AccordionCalendarComponent } from '../../../../ui/components/accordion-calendar/accordion-calendar.component';
import { EventCardComponent } from '../../../../ui/components/event-card/event-card.component';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { Router } from '@angular/router';
import { Scale } from '../../../../data/services/scales/@types/find.dto';
import { ScaleService } from '../../../../data/services/firebaseServices/scale/scale.service';
import { ScaleCardComponent } from '../../../../ui/components/scale-card/scale-card.component';
import { MinisteryCardComponent } from '../../../../ui/components/ministery-card/ministery-card.component';
import { User } from '../../../../data/services/user/@types/find.dto';
import { Ministery } from '../../../../data/services/ministery/@types/find.dto';
import { UserService } from '../../../../data/services/firebaseServices/user/user.service';
import { MinisteryService } from '../../../../data/services/firebaseServices/ministery/ministery.service';
import { ScaleCard } from '../../../../data/services/scales/@types/scaleCard';

@Component({
  selector: 'app-calendar',
  imports: [
    TitleComponent,
    ToggleComponent,
    AccordionCalendarComponent,
    EventCardComponent,
    ButtonComponent,
    LucideAngularModule,
    ScaleCardComponent,
    MinisteryCardComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  activeView: 'scales' | 'events' = 'scales';
  date: Date = new Date();
  scales: ScaleCard[] = [];
  scaleUsers: User[] = [];
  ministery!: Ministery;
  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';
  readonly PlusIcon = Plus;

  constructor(
    private router: Router,
    private scalesService: ScaleService,
    private userService: UserService,
    private ministeryService: MinisteryService
  ) {}

  async ngOnInit(): Promise<void> {
    const scales: Scale[] = await this.scalesService.findAll();

    for (const scale of scales) {
      const members = (await Promise.all(scale.membersId.map(async id => await this.userService.findById(id)))) as User[];

      const ministery = (await this.ministeryService.findById(scale.ministeryID)) as Ministery;

      const scaleCard: ScaleCard = {
        date: scale.date as unknown as string,
        id: String(scale.id),
        members: members,
        ministery: ministery,
        status: scale.status
      };

      this.scales.push(scaleCard);
    }
  }

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
