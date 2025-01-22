import { Injectable } from '@angular/core';
import { CRUDService } from '../../@types/models/CRUDService.model';
import { Scale } from './@types/find.dto';
import { CreateScaleDto } from './@types/create.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScalesService extends CRUDService<Scale, CreateScaleDto> {
  constructor(http: HttpClient) {
    super(http, '/scales');
  }
}
