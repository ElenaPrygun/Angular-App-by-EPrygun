import { Component } from '@angular/core';
import { SessionTokenService } from 'src/app/login/services/session-token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signOut() {
    this.authService.logout();
    // location.reload();
    // this.router.navigate(['products']);
  }
}
