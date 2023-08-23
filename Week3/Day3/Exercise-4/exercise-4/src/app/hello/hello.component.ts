import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  initialName: string = 'Pawan';
  initialColor: string = 'white';
  
  name: string = this.initialName;
  color: string = this.initialColor;

  changeColor() {
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex];
  }

  refresh() {
    this.name = this.initialName;
    this.color = this.initialColor;
  }
}
