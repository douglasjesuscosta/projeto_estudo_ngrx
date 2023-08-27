import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { IUser } from '../model/user.interface';
import { AutenticacaoActions } from '../autenticacao.actions.type';

export const autenticacaoFeatureKey = 'autenticacao';

export interface AutenticacaoState {
  carregando?: boolean;
  usuarioLogado?: boolean;
  user?: IUser;
}

export const initialState: AutenticacaoState = {
  carregando: false,
  usuarioLogado: false,
  user: undefined,
};

export const reducers: ActionReducerMap<AutenticacaoState> = {};

export const autenticacaoReducer = createReducer(
  initialState,
  on(AutenticacaoActions.loginAction, (state, action) => {
    return {
      ...state,
      carregando: false,
      usuarioLogado: true,
      user: action.user,
    };
  }),
  on(AutenticacaoActions.logoutAction, (state, action) => {
    return {
      ...state,
      carregando: false,
      usuarioLogado: false,
      user: undefined,
    };
  })
);
