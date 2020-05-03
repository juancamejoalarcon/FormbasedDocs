import { Injectable, APP_ID, Inject } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  public isAuth = false;
  public appInited = false;

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
  ) { }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    this.appInited = true;
    if (!this.isAuth) {
      // If JWT detected, attempt to get & store user's info

      if (this.jwtService.getToken()) {
        this.apiService.get('/user')
          .subscribe(
            (data) => {
              this.setAuth(data.user, true);
            },
            (err) => {
              console.log('------ERROR-----');
              console.log(err);
              console.log('-----------');
              this.purgeAuth();
            }
          );

      } else {
        // Remove any potential remnants of previous auth states
        this.purgeAuth();
      }
    }
  }

  setAuth(user: User, remembermeChecked: boolean) {
    // Save JWT sent from server in localstorage or session
    if (remembermeChecked) {
      this.jwtService.saveTokenInLocal(user.token);
    } else {
      this.jwtService.saveTokenInSession(user.token);
    }

    if (!user.image) {
      user.image = 'assets/images/avatar.jpg';
    }
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
    this.isAuth = true;
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    this.isAuth = false;
  }

  attemptAuth(type, credentials, rememberme): Observable<User> {
    const route = (type === 'login') ? '/login' : '/signup';
    return this.apiService.post('/user' + route, { user: credentials })
      .pipe(map(
        data => {
          this.setAuth(data.user, rememberme);
          return data;
        }
      ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put('/user', { user })
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

  changePassword(passwords: any) {
    return this.apiService
      .put('/user/change-password', passwords)
      .pipe(map(data => data));
  }

  forgotPassword(email: string) {
    return this.apiService
      .post('/user/forgot-password', { email })
      .pipe(map(data => data));
  }

  resetPassword(token: string, newPassword: string, verifyPassword: string) {
    return this.apiService
      .post('/user/reset-password', { token, newPassword, verifyPassword })
      .pipe(map(data => data));
  }

  removeAccount(password: string) {
    const params = new HttpParams().set('password', password);
    return this.apiService
      .delete('/user', params)
      .pipe(map(data => data));
  }

}
