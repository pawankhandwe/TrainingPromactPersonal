import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  providers: [{ provide: DataServiceService, useValue: { getData: () => 'Data from Child' } }] // Override DataService in the child component

})
export class ChildComponentComponent {
  parentData: string;
  childData: string;

  constructor(private DataService: DataServiceService) {
    this.parentData = DataService.getData();
    this.childData = 'Data only in Child';
  }
}
