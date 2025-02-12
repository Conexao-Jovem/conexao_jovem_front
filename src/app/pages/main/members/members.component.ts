import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { UserCardComponent } from '../../../../ui/components/user-card/user-card.component';
import { Filter, LucideAngularModule } from 'lucide-angular';
import { User } from '../../../../data/services/user/@types/find.dto';
import { RouterModule } from '@angular/router';
import { FilterCardService } from '../../../../ui/components/filter-card/filter-card.service';
import { Filter as FilterArray, FilterType } from '../../../../ui/components/filter-card/@types';
import { UserService } from '../../../../data/services/firebaseServices/user/user.service';

@Component({
  selector: 'app-members',
  imports: [TitleComponent, ButtonComponent, UserCardComponent, LucideAngularModule, RouterModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersPage implements OnInit {
  members: User[] = [];
  readonly FilterIcon = Filter;

  constructor(private filterService: FilterCardService, private userService: UserService) {}

  filters: FilterArray[] = [
    { label: 'Nome', key: 'name', type: FilterType.SEARCH },
    { label: 'Categoria', key: 'category', type: FilterType.SELECT, options: ['Tech', 'Finance', 'Health'] }
  ];

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    const allMembers = await this.userService.findAll();
    this.members = allMembers;
    console.log(allMembers);
  }

  toggleCard() {
    this.filterService.toggleCard();
    this.filterService.setFilters(this.filters);
  }
}
