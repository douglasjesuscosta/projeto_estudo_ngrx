import { createAction, props } from '@ngrx/store';
import { IUser } from './model/user.interface';

export const loginAction = createAction(
  '[Login Page] User Login',
  props<{ user: IUser }>()
);

export const carregandoAction = createAction('[Login Page] Carregando');

export const logoutAction = createAction('[Top menu] User Logout');
