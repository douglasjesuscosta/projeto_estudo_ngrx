import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FeaturesRoutingModule } from './features-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [CommonModule, FeaturesRoutingModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class FeaturesModule {}
