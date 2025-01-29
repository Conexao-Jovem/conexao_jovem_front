import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../ui/components/header/header.component';
import { BottomNavBarComponent } from '../ui/components/bottom-nav-bar/bottom-nav-bar.component';
import { SidebarComponent } from '../ui/components/sidebar/sidebar.component';
import { FilterCardComponent } from '../ui/components/filter-card/filter-card.component';
import { Filter, FilterType } from '../ui/components/filter-card/@types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BottomNavBarComponent, SidebarComponent, FilterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conexao_jovem_front';
}
