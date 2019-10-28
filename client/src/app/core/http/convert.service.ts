import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
// import { Profile } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ConvertService {
  constructor (
    private apiService: ApiService
  ) {}

  toPdf(filename: string, uri: string): Observable<any> {
      return this.apiService.post('/convert/toPdf', {
        fileName: filename,
        doc: uri
      })
      .pipe(map(data => data));
  }

  toWord(filename: string, uri: string): Observable<any> {
    return this.apiService.post('/convert/toWord', {
      fileName: filename,
      doc: uri
    })
    .pipe(map(data => data));
  }
}
