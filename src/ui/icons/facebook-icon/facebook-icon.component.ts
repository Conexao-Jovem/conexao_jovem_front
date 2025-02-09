import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facebook-icon',
  imports: [],
  templateUrl: './facebook-icon.component.html',
  styleUrl: './facebook-icon.component.scss'
})
export class FacebookIconComponent {
  @Input() width: number | string = 24;
  @Input() height: number | string = 24;
}
