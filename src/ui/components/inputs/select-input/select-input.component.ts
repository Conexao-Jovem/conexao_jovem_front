import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() inputProps: Partial<HTMLSelectElement> = {};
  @Input() Options: Partial<HTMLOptionElement>[] = [];
  @Input() label?: string;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputProps.value = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onValueChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.onChange(value);
    this.onTouched();
  }
}
