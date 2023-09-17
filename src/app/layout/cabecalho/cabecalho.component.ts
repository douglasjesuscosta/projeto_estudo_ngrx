import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, noop, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoginService } from '../../autenticacao/login.service';
import { AutenticacaoState } from 'src/app/autenticacao/sessao/reducers';
import { IUser } from 'src/app/autenticacao/model/user.interface';
import { GerenciadorTemaService } from 'src/app/shared/services/gerenciador-temas.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit, OnDestroy {
  public usuarioEstaLogado$: Observable<boolean>;
  public usuarioLogado$: Observable<IUser>;

  constructor(
    private store: Store<AutenticacaoState>,
    private loginService: LoginService,
    private router: Router,
    private geranciadorTema: GerenciadorTemaService
  ) {
    this.usuarioEstaLogado$ = this.loginService.usuarioEstaLogado();
    this.usuarioLogado$ = this.loginService.obterUsuarioLogado();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public logout() {
    this.loginService.logout();
  }

  public alternarTemaAplicacao() {
    this.geranciadorTema.alternarTemaEscuro();
  }

  public temaEscuroEstaConfigurado() {
    return this.geranciadorTema.temaEscuroConfigurado();
  }
}
