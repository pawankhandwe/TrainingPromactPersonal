import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentA1Component } from '../ModuleA/component-a1/component-a1.component';
import { ComponentA2Component } from '../ModuleA/component-a2/component-a2.component';

const routes: Routes = [
  { path: '', component: ComponentA1Component },
  { path: 'componentA2', component: ComponentA2Component }
];

@NgModule({
  declarations: [ ComponentA1Component,ComponentA2Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ModuleAModule { }
