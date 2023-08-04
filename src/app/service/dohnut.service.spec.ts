import { TestBed } from '@angular/core/testing';

import { DohnutService } from './dohnut.service';

describe('DohnutService', () => {
  let service: DohnutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DohnutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
