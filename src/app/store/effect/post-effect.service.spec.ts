import { TestBed } from '@angular/core/testing';

import { PostEffectService } from './post-effect.service';

describe('PostEffectService', () => {
  let service: PostEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
