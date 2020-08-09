import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
// import { Profile } from '../models';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class CheckoutService {
  constructor(
    private apiService: ApiService
  ) { }

  getToken(formType: string, hire_lawyer: boolean): Observable<any> {
    return this.apiService
      .post(
        `/checkout/getToken`,
        {
          formType,
          hire_lawyer
        }
      ).pipe(map(data => data));
  }

  getPaypalOrder(formType: string, hire_lawyer: boolean): Observable<any> {
    return this.apiService
      .post(`/checkout/paypal-order`, { formType, hire_lawyer }
      ).pipe(map(data => data));
  }

  pay(steps: string, email: string, transactionId: string, formType: string, method: string, hire_lawyer: boolean): Observable<any> {
    return this.apiService
      .post(`/checkout`, { steps, formType, email, transactionId, method, hire_lawyer }
      ).pipe(map(data => data));
  }

  sendMail(transactionId: string, uri: string): Observable<any> {
    return this.apiService
      .post(`/checkout/sendMail`, { 'transactionId': transactionId, 'uri': uri }
      ).pipe(map(data => data));
  }
}
