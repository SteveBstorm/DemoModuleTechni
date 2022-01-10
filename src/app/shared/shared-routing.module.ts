import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RoleguardGuard } from '../roleguard.guard';


const routes: Routes = [
  { path : 'admin', canActivate : [RoleguardGuard], loadChildren : () => import('./../admin/admin.module').then(m => m.AdminModule)},
  { path : 'client', loadChildren : () => import('./../client/client.module').then(m => m.ClientModule)},
  { path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
