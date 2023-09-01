import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

interface DataItem {
  title: string;
  body: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // data!: DataItem[];

  data: any[] = [];
  constructor(private route: ActivatedRoute, private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((apiData: any[]) => {
      this.data = apiData;
                 
    });
  }

  // ngOnInit(): void {
  //   this.route.data.subscribe((resolvedData) => {
      
  //     this.data = resolvedData['data']; // Use ['data'] to access the resolved data
  //   });
  // }
  
}
