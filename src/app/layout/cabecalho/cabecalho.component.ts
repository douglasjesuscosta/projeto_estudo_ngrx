import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, noop, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoginService } from '../../autenticacao/login.service';
import { AutenticacaoState } from 'src/app/autenticacao/reducers';
import { IUser } from 'src/app/autenticacao/model/user.interface';

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
    private router: Router
  ) {
    this.usuarioEstaLogado$ = this.loginService.usuarioEstaLogado();
    this.usuarioLogado$ = this.loginService.obterUsuarioLogado();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
