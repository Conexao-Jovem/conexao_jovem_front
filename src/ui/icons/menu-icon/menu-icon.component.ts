import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  imports: [],
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.scss'
})
export class MenuIconComponent {
  @Input() width: number | string = 24;
  @Input() height: number | string = 24;
}
