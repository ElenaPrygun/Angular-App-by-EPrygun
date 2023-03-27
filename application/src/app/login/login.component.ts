import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SessionTokenService } from './services/session-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null,
  };
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionToken: SessionTokenService
    ) {}

  
  onSubmit(): void {
    const { username, password } = this.form;

    if (username && password) {
      this.authService
        .login(username!, password!)
        .subscribe((data: { access_token: string }) => {          
          this.sessionToken.saveToken(data.access_token);
          this.router.navigate(['administration']);
        });
    }
  }
}
