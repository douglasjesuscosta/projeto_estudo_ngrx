import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    ModalComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
