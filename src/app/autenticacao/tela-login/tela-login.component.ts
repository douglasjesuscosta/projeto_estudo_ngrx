import { noop, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../login.service';
import { AutenticacaoState } from '../sessao/reducers';
import { carregandoAction, loginAction } from '../sessao/actions/autenticacao.actions';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store<AutenticacaoState>
  ) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  public login() {
    const valueForm = this.form.value;

    this.store.dispatch(carregandoAction());

    this.realizarRequisicaoLogin(valueForm);
  }

  private realizarRequisicaoLogin(valueForm: any) {
    this.loginService
      .login(valueForm.email, valueForm.password)
      .pipe(
        tap((user) => {
          this.store.dispatch(loginAction({ user }));
          this.router.navigateByUrl('/paginas/inicio');
        })
      )
      .subscribe({
        next: noop,
        error: (error) => console.log('Error:', error),
      });
  }
}
