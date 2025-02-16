import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../../data/services/user/@types/find.dto';
import { UserService } from '../../../../data/services/firebaseServices/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {
  usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private userService: UserService) {
    if (this.usersSubject.value.length == 0) {
      this.loadUsers();
    }
  }

  async loadUsers() {
    const users = await this.userService.findAll();
    this.usersSubject.next(users);
  }
}
