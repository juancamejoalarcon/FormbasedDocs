import { 
  Injectable,
  Inject,
  Optional
 } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonsService } from '../singleton/commons.service';
import { REQUEST } from '@nguniversal/express-engine/tokens';


@Injectable()
export class JwtService {

  constructor(
    private cookieService: CookieService,
    private commonsService: CommonsService,
    @Optional() @Inject(REQUEST) private req: any
  ) {}

  getToken(): String {
    // if (this.localStorageExists()) {
    //   return window.localStorage['jwtToken'];
    // } else if (this.sessionStorageExists()) {
    //   return window.sessionStorage['jwtToken'];
    // }
    if (this.commonsService.isServer()) {
      const rawCookies = !!this.req.headers['cookie'] ? this.req.headers['cookie'] : '';
      return this.getCookieValue('jwtToken', rawCookies);
    }
    
    return this.cookieService.get('jwtToken');
  }

  getCookieValue(key: string, cookie: string) {
    var nameEQ = key + '=';
    var ca = cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  saveTokenInLocal(token: string) {
    // window.localStorage['jwtToken'] = token;
    this.cookieService.set( 'jwtToken', token );
  }

  saveTokenInSession(token: string) {
    // window.sessionStorage['jwtToken'] = token;
    this.cookieService.set( 'jwtToken', token );
  }

  destroyToken() {
    // if (this.localStorageExists()) {
    //   window.localStorage.removeItem('jwtToken');
    // }
    this.cookieService.delete('jwtToken');
  }

  localStorageExists() {
    return window.localStorage !== undefined && window.localStorage['jwtToken'] !== undefined;
  }

  sessionStorageExists() {
    return window.sessionStorage !== undefined && !window.sessionStorage['jwtToken'] !== undefined;
  }

}
