import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { IUser } from './model/user.interface';
import { AutenticacaoState } from './sessao/reducers';
import { loginAction, logoutAction } from './sessao/actions/autenticacao.actions';
import { obterUsuarioLogadoSelector, usuarioEstaLogadoSelector } from './sessao/selectors/autenticacao.selector';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuarioLogado: boolean;
  private usuarioLogado$: Observable<boolean>;

  constructor(private http: HttpClient, private store: Store<AutenticacaoState>, private router: Router) {
    this.usuarioLogado = false;
    this.usuarioLogado$ = this.store.pipe(select(usuarioEstaLogadoSelector));
    this.monitorarUsuarioLogado();
  }

  public login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('/api/login', { email, password });
  }

  public logout() {
    this.store.dispatch(logoutAction());
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

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(usuarioEstaLogadoSelector),
      tap((usuarioEstaLogado) => this.verificarUsuarioLogado(usuarioEstaLogado))
    );
  }

  private verificarUsuarioLogado(usuarioEstaLogado: boolean) {
    if (!usuarioEstaLogado) {
      let usuarioRecuperado = localStorage.getItem('user');
      let usuarioLogado: IUser = usuarioRecuperado ? JSON.parse(usuarioRecuperado) : null;

      if (usuarioLogado) {
        usuarioLogado && this.store.dispatch(loginAction({ user: usuarioLogado }));
      } else {
        this.router.navigateByUrl('/login');
      }
    }
  }
}
