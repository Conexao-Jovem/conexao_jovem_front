import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Calendar, HandHeart, House, LogOut, LucideAngularModule, Settings, UsersRound } from 'lucide-angular';
import { SidebarService } from './sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  readonly Options = [
    // {
    //   icon: House,
    //   path: '',
    //   label: 'Início'
    // },
    {
      icon: Calendar,
      path: 'calendar',
      label: 'Calendário'
    },
    {
      icon: HandHeart,
      path: 'ministerys',
      label: 'Ministérios'
    },
    {
      icon: UsersRound,
      path: 'members',
      label: 'Membros'
    }
  ];

  readonly CommonOptions = [
    {
      icon: Settings,
      label: 'Configurações',
      path: '/settings',
      customClass: ''
    },
    {
      icon: LogOut,
      label: 'Sair da conta',
      path: '/logout',
      customClass: 'logout'
    }
  ];
}
