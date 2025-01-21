import { Component, Input } from '@angular/core';
import { StatusLabelComponent } from '../status-label/status-label.component';

@Component({
  selector: 'app-ministery-scale-card',
  imports: [StatusLabelComponent],
  templateUrl: './ministery-scale-card.component.html',
  styleUrl: './ministery-scale-card.component.scss'
})
export class MinisteryScaleCardComponent {
  @Input() groupName: string = 'Equipe de Louvor';
  @Input() groupPrincipal: string = 'Gabrielly Silva';
  @Input() groupStatus: 'CONFIRMADO' | 'PENDENTE' = 'CONFIRMADO';
  @Input() members: { url: string; name: string }[] = [
    {
      url: 'https://github.com/gibrankhalil.png',
      name: 'Gibran Khalil'
    },
    {
      url: 'https://github.com/gibrankhalil.png',
      name: 'Gibran Khalil'
    },
    {
      url: 'https://github.com/gibrankhalil.png',
      name: 'Gibran Khalil'
    },
    {
      url: 'https://github.com/gibrankhalil.png',
      name: 'Gibran Khalil'
    }
  ];
  @Input() groupImg: string = 'https://github.com/Conexao-Jovem.png';
}
