import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-text-input',
  imports: [FormsModule, LucideAngularModule, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  readonly SearchIcon = Search;

  @Input() inputProps: Partial<HTMLInputElement> = {};
  @Input() label?: string;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(value: string): void {
    this.onChange(value);
  }
}
