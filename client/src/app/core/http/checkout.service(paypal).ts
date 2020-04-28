import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
// import { Profile } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class CheckoutService {
  constructor (
    private apiService: ApiService
  ) {}

  getToken(method: string): Observable<any> {
    return this.apiService.get(`/checkout/new?method=${method}`)
      .pipe(map((data: any) => data.clientToken));
  }

  pay(steps: string, email: string, nonce: string, formType: string, method: string): Observable<any> {
    return this.apiService
    .post(
      `/checkout`,
      {
        'steps': steps,
        'formType': formType,
        'email': email,
        'payment_method_nonce': nonce,
        'method': method
      }
    ).pipe(map(data => data));
  }

  sendMail(transactionId: string, uri: string): Observable<any> {
    return this.apiService
    .post(`/checkout/sendMail`, { 'transactionId': transactionId, 'uri': uri }
    ).pipe(map(data => data));
  }
}
