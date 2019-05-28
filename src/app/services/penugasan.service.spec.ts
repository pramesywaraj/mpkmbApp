import { TestBed } from '@angular/core/testing';

import { PenugasanService } from './penugasan.service';

describe('PenugasanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenugasanService = TestBed.get(PenugasanService);
    expect(service).toBeTruthy();
  });
});
