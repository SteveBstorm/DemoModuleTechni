import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  {path : '', component : ClientComponent},
  {path : 'profil', component : ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
