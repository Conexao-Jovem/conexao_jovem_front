import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [CommonModule]
})
export class CheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: any;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange(event: Event) {
    event.stopPropagation();
    if (!this.disabled) {
      const isChecked = (event.target as HTMLInputElement).checked;
      this.change.emit(isChecked);
    }
  }
}
