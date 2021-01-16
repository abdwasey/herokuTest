import { TestBed } from '@angular/core/testing';

import { WasayService } from './wasay.service';

describe('WasayService', () => {
  let service: WasayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
