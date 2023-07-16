import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
