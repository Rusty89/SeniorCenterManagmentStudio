import { TestBed } from '@angular/core/testing';

import { ActivityInvFetchService } from './activity-involvement-fetch.service';

describe('ActivityFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityInvFetchService = TestBed.get(ActivityInvFetchService);
    expect(service).toBeTruthy();
  });
});
