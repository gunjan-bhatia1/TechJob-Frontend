import { TestBed } from '@angular/core/testing';

import { TechnicianDataService } from './technician-data.service';

describe('TechnicianDataService', () => {
  let service: TechnicianDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicianDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
