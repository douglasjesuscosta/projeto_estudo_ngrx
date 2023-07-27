import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './autenticacao/login.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./autenticacao/autenticacao.module').then(
        (m) => m.AutenticacaoModule
      ),
  },
  {
    path: 'paginas',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
