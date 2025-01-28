import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input() title: string = '';
}
