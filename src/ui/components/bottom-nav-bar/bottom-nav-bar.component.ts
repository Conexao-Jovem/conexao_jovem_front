import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Calendar, HandHeart, House, LucideAngularModule, SquareUserRound, UsersRound } from 'lucide-angular';

@Component({
  selector: 'app-bottom-nav-bar',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './bottom-nav-bar.component.html',
  styleUrl: './bottom-nav-bar.component.scss'
})
export class BottomNavBarComponent {
  readonly Icons = [
    {
      icon: UsersRound,
      path: 'members'
    },
    // {
    //   icon: House,
    //   path: ''
    // },
    {
      icon: HandHeart,
      path: 'ministerys'
    },
    {
      icon: Calendar,
      path: 'calendar'
    }
    // {
    //   icon: SquareUserRound,
    //   path: 'profile'
    // }
  ];
}
