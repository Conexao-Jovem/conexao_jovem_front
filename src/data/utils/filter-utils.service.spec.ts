import { TestBed } from '@angular/core/testing';

import { FilterUtilsService } from './filter-utils.service';

describe('FilterUtilsService', () => {
  let service: FilterUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
