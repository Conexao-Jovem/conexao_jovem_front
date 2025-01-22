import { TestBed } from '@angular/core/testing';

import { MinisteryService } from './ministery.service';

describe('MinisteryService', () => {
  let service: MinisteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
