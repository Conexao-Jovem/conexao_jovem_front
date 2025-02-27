import { Injectable } from '@angular/core';
import { FirestoreCRUDService } from '../../../@types/models/FirebaseService.model';
import { User } from '../../user/@types/find.dto';
import { CreateUserDto } from '../../user/@types/create.dto';
import { getDocs, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService extends FirestoreCRUDService<User, CreateUserDto> {
  constructor() {
    super('users');
  }

  async findByDepartment(departmentId: string): Promise<User[]> {
    const usersQuery = query(this.collectionRef, where('ministeryID', '==', departmentId));
    const querySnapshot = await getDocs(usersQuery);
    return querySnapshot.docs.map(doc => doc.data() as User);
  }
}
