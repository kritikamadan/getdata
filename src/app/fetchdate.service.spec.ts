import { TestBed } from '@angular/core/testing';

import { FetchdateService } from './fetchdate.service';

describe('FetchdateService', () => {
  let service: FetchdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
