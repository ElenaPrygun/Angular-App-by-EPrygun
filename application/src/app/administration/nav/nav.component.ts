import { Component } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.logout();
    location.reload();
  }
}
