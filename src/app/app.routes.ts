import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstoqueComponent } from './estoque/estoque.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'estoque',
    component: EstoqueComponent
  },
];
