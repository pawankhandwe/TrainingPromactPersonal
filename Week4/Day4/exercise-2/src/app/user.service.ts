import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<any> {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private router: Router // Inject Router
  ) {}
  // constructor(private dataService: DataService) {}

 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> { 
    console.log(this.route);
    console.log(this.router);
    return this.dataService.getData();
}
}