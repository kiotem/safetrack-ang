import { TestBed } from '@angular/core/testing';

import { VerificationCode } from './verification-code';

describe('VerificationCode', () => {
  let service: VerificationCode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationCode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
