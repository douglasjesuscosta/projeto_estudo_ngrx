import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AutenticacaoEffectService {
  constructor(private actions$: Actions) {}

  private monitorarAcoes() {
    this.actions$.subscribe((action) => {});
  }
}
