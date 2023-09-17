import { createAction, props } from '@ngrx/store';
import { IUser } from '../../model/user.interface';
import { AutenticacaoActionEnum } from './autenticacao.actions.enum';

export const loginAction = createAction(AutenticacaoActionEnum.LOGIN, props<{ user: IUser }>());

export const carregandoAction = createAction(AutenticacaoActionEnum.CARREGANDO);

export const logoutAction = createAction(AutenticacaoActionEnum.LOGOUT);
