import { TestBed } from '@angular/core/testing';

import { ObdervableexService } from './observableex.service';

describe('ObdervableexService', () => {
  let service: ObdervableexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObdervableexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
