import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from './user.service';
import { CommonsService } from '../singleton/commons.service';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private commonsService: CommonsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.commonsService.isBrowser()) {
      return this.userService.isAuthenticated.pipe(take(1));
    } else {
      return of(true);
    }
  }
}
