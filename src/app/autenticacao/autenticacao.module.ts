import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LoginService } from './login.service';
import * as fromAutenticacao from './reducers';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { MatButtonModule } from '@angular/material/button';

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
