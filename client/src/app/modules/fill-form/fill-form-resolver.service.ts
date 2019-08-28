import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Form, FormService, UserService } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FillFormResolver implements Resolve<Form> {
  constructor(
    private formService: FormService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // Depende de si es un nuevo form o no
    if (!route.url.toString().includes('edit')) {
      return this.formService.getWithView(route.params['slug'])
      .pipe(
        map( form => {
          return form;
        }),
        catchError((err) => this.router.navigateByUrl('/')));
    } else {
      return this.formService.get(route.params['slug'])
      .pipe(
          map( form => {
            if (this.userService.getCurrentUser().username === form.filledBy.username) {
                // The route keeps an old value so I force the update
                route.data = { form: form};
                return form;
            } else {
              this.router.navigateByUrl('/');
          }}),
          catchError((err) => this.router.navigateByUrl('/')));
        }
    }
}
