import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor(
    private apiService: ApiService,
  ) { }


  search(config: any): Observable<any> {
    let params: HttpParams;
    let paramsObject: any;

    if (config.query === '') {
      paramsObject = {
        'orderBy': config.orderBy,
        'limit': config.limit,
        'offset': config.offset
      }
    } else {
      paramsObject = {
        'orderBy': config.orderBy,
        'limit': config.limit,
        'offset': config.offset,
        'query': config.query
      }
    }

    if (config.public) {
      paramsObject['public'] = config.public;
    }

    if (config.author) {
      paramsObject['author'] = config.author;
    }

    if (config.filledBy) {
      paramsObject['filledBy'] = config.filledBy;
    }

    if (config.type) {
      paramsObject['type'] = config.type;
    }

    params = new HttpParams({
      fromObject: paramsObject
    });

    return this.apiService.get('/search', params)
      .pipe(map(data => data.forms));
  }

  getAllFormsList(): Observable<any> {
    return this.apiService.get('/search/all-forms-list')
      .pipe(map(data => data.forms_list));
  }

}
