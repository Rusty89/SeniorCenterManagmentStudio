import { TestBed } from '@angular/core/testing';

import { UserAuthenticationDataService } from './user-authentication-data.service';

describe('UserAuthenticationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthenticationDataService = TestBed.get(UserAuthenticationDataService);
    expect(service).toBeTruthy();
  });
});
