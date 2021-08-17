import { TestBed } from '@angular/core/testing';

import { ReadingserviceService } from './readingservice.service';

describe('ReadingserviceService', () => {
  let service: ReadingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
