import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginService } from './login.service';
import { StoreModule } from '@ngrx/store';
import * as fromAutenticacao from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaLoginComponent],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromAutenticacao.autenticacaoFeatureKey,
      fromAutenticacao.reducers
    ),
  ],
})
export class AutenticacaoModule {
  static forRoot(): ModuleWithProviders<AutenticacaoModule> {
    return {
      ngModule: AutenticacaoModule,
      providers: [LoginService],
    };
  }
}
