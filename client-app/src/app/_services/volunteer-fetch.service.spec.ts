import { TestBed } from '@angular/core/testing';

import { VolunteerFetchService } from './volunteer-fetch.service';

describe('ActivityFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerFetchService = TestBed.get(VolunteerFetchService);
    expect(service).toBeTruthy();
  });
});
