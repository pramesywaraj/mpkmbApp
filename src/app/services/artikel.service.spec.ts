import { TestBed } from '@angular/core/testing';

import { ArtikelService } from './artikel.service';

describe('ArtikelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtikelService = TestBed.get(ArtikelService);
    expect(service).toBeTruthy();
  });
});
