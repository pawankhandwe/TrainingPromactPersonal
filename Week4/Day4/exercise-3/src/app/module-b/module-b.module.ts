import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentB1Component } from '../ModuleB/component-b1/component-b1.component';
import { ComponentB2Component } from '../ModuleB/component-b2/component-b2.component';

const routes: Routes = [
  { path: '', component: ComponentB1Component },
  { path: 'componentB2', component: ComponentB2Component }
];

@NgModule({
  declarations: [ComponentB1Component, ComponentB2Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ModuleBModule { }
