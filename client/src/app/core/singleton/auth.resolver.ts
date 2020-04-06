import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonsService } from './commons.service';
import { UserService } from '../http';

@Injectable()
export class AuthResolver implements Resolve<Observable<boolean>> {
  constructor(
      private userService: UserService,
      private router: Router,
      private commonsService: CommonsService
  ) {}

  resolve() {
    if (this.commonsService.isBrowser()) {
      if (this.userService.appInited) {
          if (this.userService.isAuth) {
              return of(false);
          } else {
              this.router.navigateByUrl('/auth/login');
              return of(false);
          }
      } else { 
          this.userService.populate();
          this.userService.isAuthenticated.subscribe(
              (isAuthenticated) => {
                if (isAuthenticated) {
                  return of(false);
                } else {
                  this.router.navigateByUrl('/auth/login');
                  return of(false);
                }
              }
          );
      }
    }
    if (this.commonsService.isServer()) {
      if (!this.userService.isAuth) {
        this.userService.populate();
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
              if (isAuthenticated) {
                return of(true);
              } else {
                this.router.navigateByUrl('/auth/login');
                return of(true);
              }
            }
        );
      }
    }
    return of(true);
  }
}