import { TestBed } from '@angular/core/testing';

import { UserInputServiceService } from './user-input-service.service';

describe('UserInputServiceService', () => {
  let service: UserInputServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInputServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
