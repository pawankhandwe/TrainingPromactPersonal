import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
     // Check if the entered credentials match
  if (this.username == 'user' && this.password == 'password') {
    // Set the intended route if available from the URL fragment
    const intendedRouteFragment = this.router.parseUrl(this.router.url).fragment;
    if (intendedRouteFragment && intendedRouteFragment.startsWith('intended=')) {
      const intendedRoute = decodeURIComponent(intendedRouteFragment.split('=')[1]);
      this.authService.setIntendedRoute(intendedRoute);
    }

    // Login
    this.authService.login();

    // Navigate back to the intended route or to home if none is set
    const intendedRoute = this.authService.getIntendedRoute();
    if (intendedRoute) {
      this.router.navigate([intendedRoute]);
    } else {
      this.router.navigate(['/home']);
    }
  } else {
    alert('Invalid credentials');
  }
 }
}