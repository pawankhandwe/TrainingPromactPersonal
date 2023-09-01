import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service'; // Import the DataService

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any[]> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.dataService.getData();
  }
}
