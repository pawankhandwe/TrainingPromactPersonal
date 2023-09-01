import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a.component';



@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleAModule {
  constructor() {
    console.log('ModuleA loaded.');
  }
 }
