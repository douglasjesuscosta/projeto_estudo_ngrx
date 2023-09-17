import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import * as fromCurso from './sessao/reducers/index';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { AdicionarEditarComponent } from './adicionar-editar/adicionar-editar.component';

@NgModule({
  declarations: [ListaCursosComponent, AdicionarEditarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    CursosRoutingModule,
    StoreModule.forFeature(fromCurso.cursoFeatureKey, fromCurso.cursoReducer),
  ],
})
export class CursosModule {}
