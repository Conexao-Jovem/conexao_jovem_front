import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  @Input() label?: string;
  @Input() multiSelect?: boolean = false;
}
