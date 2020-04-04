import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    if (this.localStorageExists()) {
      return window.localStorage['jwtToken'];
    } else if (this.sessionStorageExists()) {
      return window.sessionStorage['jwtToken'];
    }
  }

  saveTokenInLocal(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  saveTokenInSession(token: String) {
    window.sessionStorage['jwtToken'] = token;
  }

  destroyToken() {
    if (this.localStorageExists()) {
      window.localStorage.removeItem('jwtToken');
    }
  }

  localStorageExists() {
    return window.localStorage !== undefined && window.localStorage['jwtToken'] !== undefined;
  }

  sessionStorageExists() {
    return window.sessionStorage !== undefined && !window.sessionStorage['jwtToken'] !== undefined;
  }

}
