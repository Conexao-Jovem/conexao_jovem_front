import { Injectable } from '@angular/core';
import { CRUDService } from '../../@types/models/CRUDService.model';
import { Event } from './@types/find.dto';
import { CreateEventDto } from './@types/create.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService extends CRUDService<Event, CreateEventDto> {
  constructor(http: HttpClient) {
    super(http, '/events');
  }
}
