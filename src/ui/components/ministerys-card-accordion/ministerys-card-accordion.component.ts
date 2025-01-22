import { Component, Input } from '@angular/core';
import { CircleCheckBig, Clock4, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ministerys-card-accordion',
  imports: [LucideAngularModule],
  templateUrl: './ministerys-card-accordion.component.html',
  styleUrls: ['./ministerys-card-accordion.component.scss']
})
export class MinisterysCardAccordionComponent {
  readonly PedingIcon = Clock4;
  readonly CheckIcon = CircleCheckBig;

  @Input() ministery: string = '';
  @Input() amount: string = '';
  @Input() status: 'pending' | 'check' = 'pending'; // Recebe o status

  get isPending(): boolean {
    return this.status === 'pending';
  }
}
