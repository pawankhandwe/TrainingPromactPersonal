import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-5';
  parentData: string = 'Data from Parent';
  parentMessage :string = 'hello bacche , Kaise ho !';
}
