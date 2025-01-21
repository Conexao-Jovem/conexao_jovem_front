import { Component, Input } from '@angular/core';
import { StatusLabelComponent } from '../status-label/status-label.component';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule, Pencil } from 'lucide-angular';
import { TwoDotIconComponent } from '../../icons/two-dot-icon/two-dot-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ministery-card',
  imports: [StatusLabelComponent, ButtonComponent, TwoDotIconComponent, LucideAngularModule, CommonModule],
  templateUrl: './ministery-card.component.html',
  styleUrl: './ministery-card.component.scss'
})
export class MinisteryCardComponent {
  @Input() groupName: string = '';
  @Input() groupTotalMembers?: number;
  @Input() groupPrincipal?: string;
  @Input() groupStatus?: 'CONFIRMADO' | 'PENDENTE';
  @Input() groupImg: string = 'https://github.com/Conexao-Jovem.png';
  @Input() members?: { url: string; name: string }[];
  @Input() isScaleCard: boolean = false;
  readonly EditIcon = Pencil;
}
