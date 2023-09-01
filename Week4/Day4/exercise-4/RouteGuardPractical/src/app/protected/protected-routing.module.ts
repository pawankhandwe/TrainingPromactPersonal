import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from '../services/auth.guard';
import { DataResolver } from '../services/data.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
    resolve: { data: DataResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
