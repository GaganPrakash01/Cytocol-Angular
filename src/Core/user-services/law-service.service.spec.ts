import { TestBed } from '@angular/core/testing';

import { LawServiceService } from './law-service.service';

describe('LawServiceService', () => {
  let service: LawServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
