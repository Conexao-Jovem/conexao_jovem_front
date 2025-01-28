import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-input',
  imports: [],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  @Input() inputProps: Partial<HTMLSelectElement> = {};
  @Input() Options: Partial<HTMLOptionElement>[] = [];
  @Input() label?: string;
}
