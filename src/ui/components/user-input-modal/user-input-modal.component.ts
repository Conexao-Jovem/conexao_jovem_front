import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Search, X } from 'lucide-angular';
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
  users: User[] = [];

  constructor(private userInputService: UserInputService) {}

  searchInputProps: Partial<HTMLInputElement> = {
    name: 'search',
    placeholder: 'Pesquise aqui',
    type: 'search'
  };

  ngOnInit(): void {
    this.userInputService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
