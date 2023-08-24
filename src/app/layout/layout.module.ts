import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import * as fromLayout from './estado/reducers';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [CabecalhoComponent, RodapeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature(
      fromLayout.layoutFeatureKey,
      fromLayout.layoutReducer
    ),
  ],
  exports: [CabecalhoComponent, RodapeComponent],
})
export class LayoutModule {}
