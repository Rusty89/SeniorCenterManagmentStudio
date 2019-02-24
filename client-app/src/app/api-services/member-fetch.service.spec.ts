import { TestBed } from '@angular/core/testing';

import { MemberFetchService } from './member-fetch.service';

describe('MemberFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberFetchService = TestBed.get(MemberFetchService);
    expect(service).toBeTruthy();
  });
});
