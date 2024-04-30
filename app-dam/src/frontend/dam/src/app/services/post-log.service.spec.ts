import { TestBed } from '@angular/core/testing';

import { PostLogService } from './post-log.service';

describe('PostLogService', () => {
  let service: PostLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
