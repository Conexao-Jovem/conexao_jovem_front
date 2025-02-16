import { Injectable } from '@angular/core';
import { FirestoreCRUDService } from '../../../@types/models/FirebaseService.model';
import { Scale } from '../../scales/@types/find.dto';
import { CreateScaleDto } from '../../scales/@types/create.dto';

@Injectable({
  providedIn: 'root'
})
export class ScaleService extends FirestoreCRUDService<Scale, CreateScaleDto> {
  constructor() {
    super('scale');
  }
}
