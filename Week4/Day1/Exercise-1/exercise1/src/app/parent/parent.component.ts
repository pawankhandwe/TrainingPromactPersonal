import { Component } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  loginform=new FormGroup(
    {
      username:new FormControl('',[Validators.required]), 
      password:new FormControl('',[Validators.required]),
})
  
  loginuser()
  {
    console.warn(this.loginform.value);
    
  }

  get username()
  {
    // console.log(this.loginform.value);
    
    return this.loginform.get('username');
  }
  get password()
  {
    return this.loginform.get('password');
  }
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
