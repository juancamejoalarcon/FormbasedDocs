import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StaticService } from '../../../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ModelosResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private staticService: StaticService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.staticService.getFormBlog(route.params['id'])
      .pipe(
        map(data => {
          return data;
        }),
        catchError((err) => this.router.navigateByUrl('/')));
  }
}


