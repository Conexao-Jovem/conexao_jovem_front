import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../ui/components/button/button.component';
import { Filter, LucideAngularModule } from 'lucide-angular';
import { MinisteryCardComponent } from '../../../ui/components/ministery-card/ministery-card.component';

@Component({
  selector: 'app-ministerys',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule, MinisteryCardComponent],
  templateUrl: './ministerys.component.html',
  styleUrl: './ministerys.component.scss'
})
export class MinisterysPage {
  readonly FilterIcon = Filter;
  @Input() ministerys: { name: string; totalMembers: number; imgUrl: string }[] = [
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    },
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    },
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    },
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    },
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    },
    {
      name: 'Ministério de Louvor',
      imgUrl: 'https://github.com/Conexao-Jovem.png',
      totalMembers: 12
    }
  ];
}
