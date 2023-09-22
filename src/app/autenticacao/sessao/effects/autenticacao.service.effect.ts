import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AutenticacaoActions } from '../actions/autenticacao.actions.type';

@Injectable()
export class AutenticacaoEffectService {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AutenticacaoActions.loginAction),
        tap((action) => this.salvarUsuarioLocal(action))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AutenticacaoActions.logoutAction),
        tap(() => {
          this.removerUsuarioLocal();
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  private salvarUsuarioLocal(action: any) {
    localStorage.setItem('user', JSON.stringify(action['user']));
  }

  private removerUsuarioLocal() {
    localStorage.removeItem('user');
  }
}
