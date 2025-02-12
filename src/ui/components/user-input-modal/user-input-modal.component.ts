import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { TextInputComponent } from '../inputs/text-input/text-input.component';
import { UserInputService } from '../inputs/user-input/user-input.service';
import { User } from '../../../data/services/user/@types/find.dto';
import { CheckboxComponent } from '../inputs/checkbox/checkbox.component';

@Component({
  selector: 'app-user-input-modal',
  imports: [LucideAngularModule, TextInputComponent, CheckboxComponent],
  templateUrl: './user-input-modal.component.html',
  styleUrl: './user-input-modal.component.scss'
})
export class UserInputModalComponent implements OnInit {
  readonly CloseIcon = X;
  users: Array<User> = [];
  selectedUsers: User[] = [];
  isOpen: boolean = false;

  constructor(private userInputService: UserInputService) {}

  searchInputProps: Partial<HTMLInputElement> = {
    name: 'search',
    placeholder: 'Pesquise aqui',
    type: 'search'
  };

  ngOnInit(): void {
    this.userInputService.users$.subscribe((users: User[]) => {
      this.users = users;
      this.selectedUsers = this.selectedUsers.filter(selectedUser => this.users.some(user => user.id === selectedUser.id));
    });

    this.userInputService.isOpen$.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    });
  }

  toggleUserSelection(user: User) {
    const index = this.selectedUsers.findIndex(u => u.id === user.id);
    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  getSelectedUsers(): User[] {
    return this.selectedUsers;
  }

  toggleModal() {
    this.userInputService.toggleModal();
  }
}
