import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterUtilsService {
  constructor() {}

  cleanText(text: string) {
    if (!text) return '';

    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    text = text.replace(/[^a-zA-Z0-9\s]/g, '');

    text = text.toLowerCase();

    text = text.trim().replace(/\s+/g, ' ');

    return text;
  }
}
