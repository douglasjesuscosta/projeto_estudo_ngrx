import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

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
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  public login() {
    const valueForm = this.form.value;
    console.log('VALUE FORM', valueForm);

    this.loginService
      .login(valueForm.email, valueForm.password)
      .pipe(
        tap((user) => {
          console.log('USER', user);
          this.router.navigateByUrl('/paginas/inicio');
        })
      )
      .subscribe();
  }
}
