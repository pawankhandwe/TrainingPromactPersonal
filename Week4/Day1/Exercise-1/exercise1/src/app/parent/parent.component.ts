import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  stringArray: string[] = ['String 1', 'String 2', 'String 3'];
  data:string = '';
  // data={
  //   name:'pawan',
  //   age:'22',
  //   gender:'male'
  // }
  datafromchild :string='';
  items: string[] = ['Item 1  ', 'Item 2  ', 'Item 3  '];

  removeItem(itemToRemove: string) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
  ChilddataFunction($event:string) {
  
    this.datafromchild=$event;
    console.log($event);
    
  }

  ParentData()

  {
    this.data= 'kaise ho beta !';
  }

  removeString(stringToRemove: string) {
    this.stringArray = this.stringArray.filter(str => str !== stringToRemove);
  }

  
}
