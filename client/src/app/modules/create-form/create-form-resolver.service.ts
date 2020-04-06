import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Form, FormService, UserService, CommonsService } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CreateFormResolver implements Resolve<Form> {
  constructor(
    private formsService: FormService,
    private router: Router,
    private userService: UserService,
    private commonsService: CommonsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    if (this.commonsService.isBrowser()) {
      return this.formsService.get(route.params['slug'])
      .pipe(
        map( form => {
          if (this.userService.getCurrentUser().username === form.author.username) {
            return form;
          } else {
            this.router.navigateByUrl('/');
        }}),
        catchError((err) => this.router.navigateByUrl('/')));
      }
    }
}


