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

  getToken(): Observable<any> {
    return this.apiService.get('/checkout/new')
      .pipe(map((data: any) => data.clientToken));
  }

}
