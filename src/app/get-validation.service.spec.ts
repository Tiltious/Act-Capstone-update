import { TestBed } from '@angular/core/testing';

import { GetValidationService } from './get-validation.service';

describe('GetValidationService', () => {
  let service: GetValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
