import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor (
    private apiService: ApiService,
  ) {}


  search(config: any): Observable<any> {
    let params: HttpParams;
    if (config.query === '') {
      params = new HttpParams()
      .set('orderBy', config.orderBy)
      .set('limit', config.limit)
      .set('offset', config.offset);
    } else {
      params = new HttpParams()
      .set('orderBy', config.orderBy)
      .set('limit', config.limit)
      .set('offset', config.offset)
      .set('query', config.query);
    }

    return this.apiService.get('/search', params)
    .pipe(map(data => data.forms));
  }

  searchProfile(config: any): Observable<any> {
    let params: HttpParams;
      params = new HttpParams()
      .set('orderBy', config.orderBy)
      .set('limit', config.limit)
      .set('offset', config.offset)
      .set('author', config.author);

    return this.apiService.get('/search', params)
    .pipe(map(data => data.forms));
  }

  searchFilledForms(config: any): Observable<any> {
    let params: HttpParams;
      params = new HttpParams()
      .set('orderBy', config.orderBy)
      .set('limit', config.limit)
      .set('offset', config.offset)
      .set('filledBy', config.filledBy)
      .set('type', config.type);

    return this.apiService.get('/search', params)
    .pipe(map(data => data.forms));
  }

}
