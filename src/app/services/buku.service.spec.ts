import { TestBed } from '@angular/core/testing';

import { BukuService } from './buku.service';

describe('BukuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BukuService = TestBed.get(BukuService);
    expect(service).toBeTruthy();
  });
});
