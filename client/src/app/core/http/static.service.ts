import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class StaticService {
  constructor(
    private apiService: ApiService
  ) { }

  get(image: string): Observable<any> {
    return this.apiService.get('/static/images/' + image)
      .pipe(map((data: { image: string }) => data.image));
  }

}
