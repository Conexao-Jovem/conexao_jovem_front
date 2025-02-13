import { Component } from '@angular/core';
import { TitleComponent } from '../../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../../ui/components/button/button.component';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-new-scale',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule],
  templateUrl: './new-scale.component.html',
  styleUrl: './new-scale.component.scss'
})
export class NewScaleComponent {
  readonly XIcon = X;
}
