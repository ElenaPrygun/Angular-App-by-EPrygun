import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import {SessionTokenService} from './session-token.service';



@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private AUTH_API = 'https://hys-fe-course-api.vercel.app/auth/login';

  constructor(private http: HttpClient,
    public router: Router,
    private sessionTokenService: SessionTokenService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API, {
      username,
      password,
    });
  }

  logout() {
    this.sessionTokenService.signOut();
    this.router.navigate(['/login']);
  }
}
