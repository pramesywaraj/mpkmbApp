import { TestBed } from '@angular/core/testing';

import { BeritaService } from './berita.service';

describe('BeritaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeritaService = TestBed.get(BeritaService);
    expect(service).toBeTruthy();
  });
});
