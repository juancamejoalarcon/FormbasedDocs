import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Form, FormService, UserService } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CreateFormResolver implements Resolve<Form> {
  constructor(
    private formsService: FormService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
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


