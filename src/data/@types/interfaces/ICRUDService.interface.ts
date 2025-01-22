import { Observable } from 'rxjs';
import { CommonResponse } from './commonResponse';
import { FindResponse } from './findAllResponse';

export interface ICRUDService<FIND, CREATE> {
  find(): Observable<FindResponse<FIND>>;
  findById(id: number): Observable<FIND>;
  findByPID(id: string): Observable<FIND>;
  create(data: CREATE): Observable<CommonResponse>;
  update(id: number, data: Partial<CREATE>): Observable<CommonResponse>;
  delete(id: number): Observable<CommonResponse>;
}
