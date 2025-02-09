import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-icon',
  imports: [],
  templateUrl: './google-icon.component.html',
  styleUrl: './google-icon.component.scss'
})
export class GoogleIconComponent {
  @Input() width: number | string = 24;
  @Input() height: number | string = 24;
}
