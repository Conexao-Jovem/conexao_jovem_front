import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule, Pencil, Trash2 } from 'lucide-angular';
import { TwoDotIconComponent } from '../../icons/two-dot-icon/two-dot-icon.component';

@Component({
  selector: 'app-user-card',
  imports: [ButtonComponent, LucideAngularModule, TwoDotIconComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() ministeryId: string = '';
  @Input() imgUrl: string = '';
  @Input() selectToListMode?: boolean;
  @Input() lastParticipation?: Date;
  @Input() onClickEditUser?: (userId: string) => void;

  @Input() userId: string = '';

  readonly EditIcon = Pencil;
  readonly DeleteIcon = Trash2;

  protected lastParticipationParsed: string = '';

  ngOnInit(): void {
    this.lastParticipationParsed = this.lastParticipation ? this.lastParticipation.toLocaleDateString('pt-BR') : '';
  }
}
