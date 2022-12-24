import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
const routes: Routes = [
  { path: 'users', component: TablaUsuariosComponent},
  { path: '',   redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
