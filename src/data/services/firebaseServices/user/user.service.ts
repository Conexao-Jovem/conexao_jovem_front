import { Injectable } from '@angular/core';
import { FirestoreCRUDService } from '../../../@types/models/FirebaseService.model';
import { User } from '../../user/@types/find.dto';
import { CreateUserDto } from '../../user/@types/create.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService extends FirestoreCRUDService<User, CreateUserDto> {
  constructor() {
    super('users');
  }
}
