import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class GeneralPurposeService {
    constructor(
        private apiService: ApiService
    ) { }

    sendContactForm(contactForm: Object): Observable<any> {
        return this.apiService
            .post(`/contact`, contactForm
            ).pipe(map(data => data.emailSent));
    }
}
