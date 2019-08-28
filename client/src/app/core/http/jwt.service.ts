import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    if (window.localStorage['jwtToken'] !== undefined) {
      return window.localStorage['jwtToken'];
    } else if (window.sessionStorage['jwtToken'] !== undefined) {
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
    window.localStorage.removeItem('jwtToken');
  }

}
