import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { MatIconModule } from '@angular/material/icon';
import { CursosRoutingModule } from './cursos-routing.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ListaCursosComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, CursosRoutingModule],
})
export class CursosModule {}
