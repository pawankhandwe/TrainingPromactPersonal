import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
    path: 'moduleA',
    loadChildren: () => import('./module-a/module-a.module').then(mod => mod.ModuleAModule)
  },
  {
    path: 'moduleB',
    loadChildren: () => import('./module-b/module-b.module').then(mod => mod.ModuleBModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
