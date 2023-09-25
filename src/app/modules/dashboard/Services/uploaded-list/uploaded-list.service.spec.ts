import { TestBed } from '@angular/core/testing';

import { UploadedListService } from './uploaded-list.service';

describe('UploadedListService', () => {
  let service: UploadedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
