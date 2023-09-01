import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b.component';



@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleBModule {
  constructor() {
    console.log('ModuleB loaded.');
  }
 }
