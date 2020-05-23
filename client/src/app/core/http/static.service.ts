import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class StaticService {
  constructor(
    private apiService: ApiService
  ) { }

  getFormBlog(id: string): Observable<any> {
    return this.apiService.get('/static/modelo/' + id)
      .pipe(map((data: any) => data.certifiedForm));
  }

}
