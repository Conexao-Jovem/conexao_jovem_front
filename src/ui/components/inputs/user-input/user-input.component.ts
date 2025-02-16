import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../data/services/user/@types/find.dto';
import { UserCardComponent } from '../../user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { UserInputService } from './user-input.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FilterUtilsService } from '../../../../data/utils/filter-utils.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [UserCardComponent, CommonModule, TextInputComponent, CheckboxComponent, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent implements OnInit {
  @Input() label?: string;
  @Input() multiSelect: boolean = false;
  @Input() componentId: string = 'default-id';

  selectedUserIds: Set<string> = new Set();
  selectedUsersArray: User[] = [];
  users: User[] = [];
  filteredUsers: User[] = [];

  protected filterText: string = '';
  protected isOpenModal: boolean = false;

  constructor(private userInputService: UserInputService, private filterService: FilterUtilsService) {}

  searchInputProps: Partial<HTMLInputElement> = {
    name: 'search',
    placeholder: 'Pesquise aqui',
    type: 'search'
  };

  ngOnInit(): void {
    this.userInputService.users$.subscribe((users: User[]) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  toggleModal() {
    this.isOpenModal = !this.isOpenModal;
  }

  private updateSelectedUsersArray() {
    this.selectedUsersArray = this.users.filter(user => this.selectedUserIds.has(user.id));
  }

  handleSelectUser(user: User) {
    const newSelectedUserIds = new Set(this.selectedUserIds);

    if (newSelectedUserIds.has(user.id)) {
      newSelectedUserIds.delete(user.id);
    } else {
      if (!this.multiSelect) {
        newSelectedUserIds.clear();
        this.toggleModal();
      }
      newSelectedUserIds.add(user.id);
    }

    this.selectedUserIds = newSelectedUserIds;
    this.updateSelectedUsersArray();
  }

  isUserSelected(user: User): boolean {
    return this.selectedUserIds.has(user.id);
  }

  onChangeFilterText(text: string) {
    this.filterText = this.filterService.cleanText(text);

    if (!this.filterText) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(user => this.filterService.cleanText(user.name).includes(this.filterText));
  }
}
