import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../ui/components/header/header.component';
import { TitleComponent } from '../ui/components/title/title.component';
import { BottomNavBarComponent } from '../ui/components/bottom-nav-bar/bottom-nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TitleComponent, BottomNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conexao_jovem_front';
}
