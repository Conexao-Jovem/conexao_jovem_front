import { Injectable } from '@angular/core';
import { CRUDService } from '../../@types/models/CRUDService.model';
import { Ministery } from './@types/find.dto';
import { CreateMinisteryDto } from './@types/create.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinisteryService extends CRUDService<Ministery, CreateMinisteryDto> {
  constructor(http: HttpClient) {
    super(http, '/ministerys');
  }
}
