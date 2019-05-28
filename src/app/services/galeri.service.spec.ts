import { TestBed } from '@angular/core/testing';

import { GaleriService } from './galeri.service';

describe('GaleriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaleriService = TestBed.get(GaleriService);
    expect(service).toBeTruthy();
  });
});
