import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-dot-icon',
  imports: [],
  templateUrl: './two-dot-icon.component.html',
  styleUrl: './two-dot-icon.component.scss'
})
export class TwoDotIconComponent {
  @Input() width: number | string = 24;
  @Input() height: number | string = 24;
}
