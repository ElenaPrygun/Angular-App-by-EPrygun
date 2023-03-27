import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { SessionTokenService } from './session-token.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    public router: Router,
    private sessionTokenService: SessionTokenService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.sessionTokenService.getToken();
    if (token != null) {
      
      const decodedToken:any = jwt_decode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      if (expirationDate > new Date()) {
        authReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token),
        });
      } else {
        
        this.router.navigate(['/login']);
      }
    }
    return next.handle(authReq);
  }
}
