import { Component, Input } from '@angular/core';
import { User } from '../../../data/services/user/@types/find.dto';
import { Ministery } from '../../../data/services/ministery/@types/find.dto';

@Component({
  selector: 'app-scale-card',
  imports: [],
  templateUrl: './scale-card.component.html',
  styleUrl: './scale-card.component.scss'
})
export class ScaleCardComponent {
  @Input() date: string = '';
  @Input() id: string = '';
  @Input() members: User[] = [];
  @Input() ministery!: Ministery;
}
