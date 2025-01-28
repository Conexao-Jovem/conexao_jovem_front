import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from './@types';

@Injectable({
  providedIn: 'root'
})
export class FilterCardService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();
  filters: Filter[] = [];

  toggleCard() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  openCard() {
    this.isOpenSubject.next(true);
  }

  closeCard() {
    this.isOpenSubject.next(false);
  }

  isOpen() {
    return this.isOpen$;
  }

  setFilters(filters: Filter[]) {
    this.filters = filters;
  }

  getFilters() {
    return this.filters;
  }
}
