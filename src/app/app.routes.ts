import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

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
    component: EstoqueComponent,
  },
  {
    path: 'estoque/detalhes/:id',
    component: DetalhesComponent,

  },
];
