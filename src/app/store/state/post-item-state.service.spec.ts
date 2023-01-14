import { TestBed } from '@angular/core/testing';

import { PostItemStateService } from './post-item-state.service';

describe('PostItemStateService', () => {
  let service: PostItemStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostItemStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
