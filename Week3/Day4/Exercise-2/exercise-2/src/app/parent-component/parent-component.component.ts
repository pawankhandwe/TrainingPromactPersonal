import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  providers: [DataServiceService]
})
export class ParentComponentComponent {

  parentData = 'Data from Parent';
}
