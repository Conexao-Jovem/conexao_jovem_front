import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Ripple } from './@types/ripple';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'submit' | 'cancel' | 'none' | 'neutral' = 'none';
  @Input() variant?: 'contained' | 'icon';
  @Input() roundedFull?: boolean;
  @Input() roundedFullSquared?: boolean;
  @Input() withIcon?: boolean;
  @Input() type: HTMLButtonElement['type'] = 'button';
  @Output() btnClick = new EventEmitter<MouseEvent>();
  @Input() customStyle: { [key: string]: string } = {};

  ripples: Ripple[] = [];

  constructor(private elementRef: ElementRef) {}

  handleClick(event: MouseEvent): void {
    const button = this.elementRef.nativeElement.getBoundingClientRect();
    const rippleX = event.clientX - button.left;
    const rippleY = event.clientY - button.top;

    const newRipple: Ripple = {
      x: rippleX,
      y: rippleY,
      id: Date.now()
    };

    this.ripples = [...this.ripples, newRipple];
    this.btnClick.emit(event);
  }

  handleAnimationEnd(rippleId: number): void {
    this.ripples = this.ripples.filter(ripple => ripple.id !== rippleId);
  }

  get buttonClasses(): string {
    const baseClass = 'button';
    const withIconClass = this.withIcon ? 'button--withIcon' : '';
    const variantClass = this.variant ? `button--${this.color}--${this.variant}` : `button--${this.color}`;
    const disabledClass = this.disabled ? 'button--disabled' : '';
    const rounded = this.roundedFullSquared ? 'rounded' : '';

    return `${baseClass} ${variantClass} ${disabledClass} ${withIconClass} ${rounded}`;
  }
}
