import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { IUser } from './model/user.interface';
import { AutenticacaoState } from './reducers';
import {
  obterUsuarioLogadoSelector,
  usuarioEstaLogadoSelector,
} from './selectors/autenticacao.selector';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuarioLogado: boolean;
  private usuarioLogado$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private store: Store<AutenticacaoState>
  ) {
    this.usuarioLogado = false;
    this.usuarioLogado$ = this.store.pipe(select(usuarioEstaLogadoSelector));
    this.monitorarUsuarioLogado();
  }

  public login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('/api/login', { email, password });
  }

  public usuarioEstaLogado(): Observable<boolean> {
    return this.usuarioLogado$;
  }

  public obterUsuarioLogado(): Observable<IUser> {
    return this.store.pipe(select(obterUsuarioLogadoSelector));
  }

  private monitorarUsuarioLogado() {
    this.usuarioLogado$.subscribe((usuarioLogado: boolean) => {
      this.usuarioLogado = usuarioLogado;
    });
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.usuarioLogado;
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(LoginService).canActivate(next, state);
};
