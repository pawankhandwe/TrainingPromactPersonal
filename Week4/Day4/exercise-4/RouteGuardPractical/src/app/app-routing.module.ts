import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DataResolver } from './services/data.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'home',
    component: HomeComponent,
    resolve: { data: DataResolver },  
    canActivate: [AuthGuard], 
  },
  {
    path: 'moduleA',
    loadChildren: () => import('../app/module-a/module-a.module').then(m => m.ModuleAModule),
  },
  {
    path: 'moduleB',
    loadChildren: () => import('../app/module-b/module-b.module').then(m => m.ModuleBModule),
  },
  {
    path: 'protected', 
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
