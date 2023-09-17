import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';

import { LoginService } from './login.service';
import * as fromAutenticacao from './sessao/reducers';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AutenticacaoEffectService } from './sessao/effects/autenticacao.service.effect';

@NgModule({
  declarations: [TelaLoginComponent],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    HttpClientModule,
    StoreModule.forFeature(fromAutenticacao.autenticacaoFeatureKey, fromAutenticacao.autenticacaoReducer),
    EffectsModule.forFeature([AutenticacaoEffectService]),
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
