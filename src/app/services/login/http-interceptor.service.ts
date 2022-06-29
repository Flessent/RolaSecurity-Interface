import { Injectable } from '@angular/core';
import {HttpHandler,HttpHeaders, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private authenticationService: LoginService) { }

      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicRolaSecurity') === -1) {
              const authReq = req.clone({
                  headers: new HttpHeaders({
                      'Content-Type': 'application/json',
                      'Authorization': `Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`
                  })
              });
              return next.handle(authReq);
          } else {
              return next.handle(req);
          }
      }
}
