import { TestBed } from '@angular/core/testing';

import { ActivityFetchService } from './activity-fetch.service';

describe('ActivityFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityFetchService = TestBed.get(ActivityFetchService);
    expect(service).toBeTruthy();
  });
});
