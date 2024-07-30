import { Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

export const appRoutes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'crear-usuario', component: UsuarioFormComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];