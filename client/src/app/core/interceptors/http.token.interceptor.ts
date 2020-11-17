import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../http';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  private noApplyInterceptorUrl: Array<string> = ['hooks.slack.com'];
  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const skipInterceptor = this.noApplyInterceptorUrl.find((url) => { return req.url.includes(url) });
    const request = skipInterceptor ? req : req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
