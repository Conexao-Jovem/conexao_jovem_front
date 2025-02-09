import { Component } from '@angular/core';
import { HeaderComponent } from "../../../ui/components/header/header.component";
import { SidebarComponent } from "../../../ui/components/sidebar/sidebar.component";
import { FilterCardComponent } from "../../../ui/components/filter-card/filter-card.component";
import { BottomNavBarComponent } from "../../../ui/components/bottom-nav-bar/bottom-nav-bar.component";

@Component({
  selector: 'app-template-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [HeaderComponent, SidebarComponent, FilterCardComponent, BottomNavBarComponent]
})
export class MainTemplateComponent {
}
