import { Injectable } from '@angular/core';
import { FirestoreCRUDService } from '../../../@types/models/FirebaseService.model';
import { Ministery } from '../../ministery/@types/find.dto';
import { CreateMinisteryDto } from '../../ministery/@types/create.dto';

@Injectable({
  providedIn: 'root'
})
export class MinisteryService extends FirestoreCRUDService<Ministery, CreateMinisteryDto> {
  constructor() {
    super('ministery');
  }
}
