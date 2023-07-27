import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { IUser } from './model/user.interface';
import { AutenticacaoState } from './reducers';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private store: Store<AutenticacaoState>
  ) {}

  public login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('/api/login', { email, password });
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //your logic goes here

    return false;
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(LoginService).canActivate(next, state);
};
