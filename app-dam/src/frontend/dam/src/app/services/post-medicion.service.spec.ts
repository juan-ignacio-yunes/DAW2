import { TestBed } from '@angular/core/testing';

import { PostMedicionService } from './post-medicion.service';

describe('PostMedicionService', () => {
  let service: PostMedicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostMedicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
