import { TestBed } from '@angular/core/testing';

import { PaymentpayloadService } from './paymentpayload.service';

describe('PaymentpayloadService', () => {
  let service: PaymentpayloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentpayloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
