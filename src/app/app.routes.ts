import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';

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
  {
    path: 'contato',
    component: ContatoComponent
  }
];
