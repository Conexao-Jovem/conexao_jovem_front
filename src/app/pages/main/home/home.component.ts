import { Component } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { EventCardComponent } from '../../../../ui/components/event-card/event-card.component';
import { MinisteryCardComponent } from '../../../../ui/components/ministery-card/ministery-card.component';

@Component({
  selector: 'app-home',
  imports: [TitleComponent, EventCardComponent, MinisteryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePage {
  date: Date = new Date();
  imgUrl: string = 'https://i0.statig.com.br/bancodeimagens/8p/x2/j0/8px2j0dy44o30tif6sp9mgolj.jpg';

  ministerysScale: {
    groupName: string;
    groupPrincipal: string;
    groupImg: string;
    members: { url: string; name: string }[];
    groupStatus: 'CONFIRMADO' | 'PENDENTE';
  }[] = [
    {
      groupName: 'Louvor',
      groupPrincipal: 'Maria Silva',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user1.png', name: 'João Santos' },
        { url: 'https://github.com/user2.png', name: 'Ana Oliveira' },
        { url: 'https://github.com/user3.png', name: 'Pedro Costa' }
      ],
      groupStatus: 'CONFIRMADO'
    },
    {
      groupName: 'Mídia',
      groupPrincipal: 'Lucas Ferreira',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user4.png', name: 'Carla Souza' },
        { url: 'https://github.com/user5.png', name: 'Bruno Lima' }
      ],
      groupStatus: 'CONFIRMADO'
    },
    {
      groupName: 'Intercessão',
      groupPrincipal: 'Isabel Almeida',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user4.png', name: 'Rafael Martins' },
        { url: 'https://github.com/user7.png', name: 'Juliana Rocha' }
      ],
      groupStatus: 'PENDENTE'
    },
    {
      groupName: 'Dança',
      groupPrincipal: 'Beatriz Santos',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user8.png', name: 'Mariana Costa' },
        { url: 'https://github.com/user9.png', name: 'Thiago Silva' }
      ],
      groupStatus: 'CONFIRMADO'
    },
    {
      groupName: 'Recepção',
      groupPrincipal: 'Paulo Roberto',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user10.png', name: 'Amanda Lima' },
        { url: 'https://github.com/user11.png', name: 'Felipe Santos' }
      ],
      groupStatus: 'CONFIRMADO'
    },
    {
      groupName: 'Evangelismo',
      groupPrincipal: 'Carolina Mendes',
      groupImg: 'https://github.com/Conexao-Jovem.png',
      members: [
        { url: 'https://github.com/user12.png', name: 'Gabriel Oliveira' },
        { url: 'https://github.com/user13.png', name: 'Fernanda Costa' }
      ],
      groupStatus: 'PENDENTE'
    }
  ];
}
