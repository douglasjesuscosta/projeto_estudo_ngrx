import { createAction, props } from '@ngrx/store';
import { IUser } from './model/user.interface';

export const loginAction = createAction(
  '[Login Page] User Login',
  props<{ user: IUser }>()
);

export const logoutAction = createAction('[Top menu] User Logout');
