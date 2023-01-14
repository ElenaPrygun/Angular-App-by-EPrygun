import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionTokenService {

  TOKEN_KEY = 'auth-token';

  constructor() { }

  signOut(): void {
    sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }
}
