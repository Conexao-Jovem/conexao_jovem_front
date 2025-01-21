import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../ui/components/button/button.component';
import { UserCardComponent } from '../../../ui/components/user-card/user-card.component';
import { Filter, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-members',
  imports: [TitleComponent, ButtonComponent, UserCardComponent, LucideAngularModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersPage {
  @Input() members: { name: string; group: string; img: string }[] = [
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    },
    {
      group: 'Sonoplastia',
      img: 'https://github.com/gibranKhalil.png',
      name: 'Gibran Khalil'
    }
  ];
  readonly FilterIcon = Filter;
}
