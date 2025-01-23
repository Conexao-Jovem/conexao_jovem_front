import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule, Pencil } from 'lucide-angular';
import { TwoDotIconComponent } from '../../icons/two-dot-icon/two-dot-icon.component';

@Component({
  selector: 'app-user-card',
  imports: [ButtonComponent, LucideAngularModule, TwoDotIconComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() name: string = '';
  @Input() ministeryId: number = 0;
  @Input() imgUrl: string = '';
  readonly EditIcon = Pencil;
}
