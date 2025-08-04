import { TestBed } from '@angular/core/testing';

import { Tractor } from './tractor';

describe('Tractor', () => {
  let service: Tractor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tractor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
