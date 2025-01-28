import { TestBed } from '@angular/core/testing';

import { FilterCardService } from './filter-card.service';

describe('FilterCardService', () => {
  let service: FilterCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
