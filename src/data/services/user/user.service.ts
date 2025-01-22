import { Injectable } from '@angular/core';
import { CRUDService } from '../../@types/models/CRUDService.model';
import { User } from './@types/find.dto';
import { CreateUserDto } from './@types/create.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CRUDService<User, CreateUserDto> {
  constructor(http: HttpClient) {
    super(http, '/users');
  }
}
