import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: PaginaInicialComponent,
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
