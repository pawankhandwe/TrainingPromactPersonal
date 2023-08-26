// user.service.ts
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // ...
  users: any[] = []; 
  constructor(private localStorageService: LocalStorageService) {}
  register(user: any): boolean {
    // Check if the username is already taken
    const existingUser = this.users.find(u => u.username === user.username);
    if (existingUser) {
      return false; // Username already taken
    }

    // Add the user to the list of users
    this.users.push(user);

    // Save the updated list of users
    this.localStorageService.setItem('users', this.users);

    return true; // Registration successful
  }
  login(username: string, password: string): boolean {
    // ...
    console.log('Users array:', this.users); // Log the users array
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.localStorageService.setItem('currentUser', user);
      return true;
    }
    // ...
    return false;
  }
  

  getCurrentUser(): any {
    return this.localStorageService.getItem('currentUser');
  }


  // Other methods like login, getCurrentUser, logout, etc.


  logout(): void {
    this.localStorageService.removeItem('currentUser');
  }
}
