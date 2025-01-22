import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICRUDService } from '../interfaces/ICRUDService.interface';
import { Observable } from 'rxjs';
import { CommonResponse } from '../interfaces/commonResponse';
import { FindResponse } from '../interfaces/findAllResponse';

@Injectable({
  providedIn: 'root'
})
export abstract class CRUDService<FIND, CREATE> implements ICRUDService<FIND, CREATE> {
  constructor(private http: HttpClient, private readonly endPoint: string, private readonly apiURL: string = '') {}

  find(): Observable<FindResponse<FIND>> {
    return this.http.get<FindResponse<FIND>>(`${this.apiURL}/${this.endPoint}`);
  }

  findById(id: number): Observable<FIND> {
    return this.http.get<FIND>(`${this.apiURL}/${this.endPoint}/${id}`);
  }

  findByPID(id: string): Observable<FIND> {
    return this.http.get<FIND>(`${this.apiURL}/${this.endPoint}/${id}`);
  }

  create(data: CREATE): Observable<CommonResponse> {
    return this.http.post<CommonResponse>(`${this.apiURL}/${this.endPoint}`, data);
  }

  update(id: number, data: Partial<CREATE>): Observable<CommonResponse> {
    return this.http.put<CommonResponse>(`${this.apiURL}/${this.endPoint}/${id}`, data);
  }

  delete(id: number): Observable<CommonResponse> {
    return this.http.delete<CommonResponse>(`${this.apiURL}/${this.endPoint}/${id}`);
  }
}
