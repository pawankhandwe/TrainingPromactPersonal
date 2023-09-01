import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private intendedRoute: string | null = null;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  get isLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  setIntendedRoute(route: string) {
    this.intendedRoute = route;
  }

  getIntendedRoute(): string | null {
    return this.intendedRoute;
  }

  clearIntendedRoute() {
    this.intendedRoute = null;
  }
}
