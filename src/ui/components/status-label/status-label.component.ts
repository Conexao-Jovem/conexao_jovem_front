import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-label',
  imports: [],
  templateUrl: './status-label.component.html',
  styleUrl: './status-label.component.scss'
})
export class StatusLabelComponent {
  @Input() status: 'CONFIRMADO' | 'PENDENTE' = 'CONFIRMADO';
}
