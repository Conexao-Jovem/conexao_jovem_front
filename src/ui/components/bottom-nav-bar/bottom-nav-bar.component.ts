import { Component } from '@angular/core';
import { Calendar, House, LucideAngularModule, SquareUserRound, UsersRound } from 'lucide-angular';

@Component({
  selector: 'app-bottom-nav-bar',
  imports: [LucideAngularModule],
  templateUrl: './bottom-nav-bar.component.html',
  styleUrl: './bottom-nav-bar.component.scss'
})
export class BottomNavBarComponent {
  readonly Icons = [House, Calendar, UsersRound, SquareUserRound];
}
