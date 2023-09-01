import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedInStatus) {
      return true;
    } else {
      // Store the intended route as a URL fragment and navigate to the login page
      this.authService.setIntendedRoute(state.url);
      this.router.navigate(['/login'], { fragment: 'intended=' + encodeURIComponent(state.url) });
      return false;
    }
  }
}

