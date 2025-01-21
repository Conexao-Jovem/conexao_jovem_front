import { Component } from '@angular/core';
import { Bell, LucideAngularModule } from 'lucide-angular';
import { MenuIconComponent } from '../../icons/menu-icon/menu-icon.component';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, MenuIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly BellIcon = Bell;
}
