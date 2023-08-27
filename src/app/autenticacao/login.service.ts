import { Observable, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { IUser } from './model/user.interface';
import { AutenticacaoState } from './reducers';
import { obterUsuarioLogadoSelector, usuarioEstaLogadoSelector } from './selectors/autenticacao.selector';
import { logoutAction } from './autenticacao.actions';

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
    this.router.navigateByUrl('/login');
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
      this.router.navigateByUrl('/login');
    }
  }
}
