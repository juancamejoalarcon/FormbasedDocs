import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfilesService } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private profilesService: ProfilesService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.profilesService.get(route.params['user'])
      .pipe(
        map(data => {
          return data;
        }),
        catchError((err) => this.router.navigateByUrl('/')));
  }
}


