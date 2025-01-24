import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../ui/components/button/button.component';
import { UserCardComponent } from '../../../ui/components/user-card/user-card.component';
import { Filter, LucideAngularModule } from 'lucide-angular';
import { User } from '../../../data/services/user/@types/find.dto';
import { UserService } from '../../../data/services/user/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members',
  imports: [TitleComponent, ButtonComponent, UserCardComponent, LucideAngularModule, RouterModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersPage implements OnInit {
  members: User[] = [];
  readonly FilterIcon = Filter;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.find().subscribe({
      next: response => {
        this.members = response.data;
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
