import { Component, Input,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input () hero:any;
  @Input ()messagetoChild : any;

  @Input()item:string='';
  @Input()data:string='thik hu papa';
  @Output() remove = new EventEmitter<string>();

  @Output() SendDataobj = new EventEmitter<string>();
  removeItem() {
    this.remove.emit(this.item);
  }

  SendData()
  {
   this.ParentData();  
   this.data = "";
  }
  ParentData()
  {
    this.SendDataobj.emit(this.data);
  }
  @Input() inputString: string = '';
  @Output() stringClicked = new EventEmitter<void>();

  handleClick() {
    this.stringClicked.emit();
  }
}
