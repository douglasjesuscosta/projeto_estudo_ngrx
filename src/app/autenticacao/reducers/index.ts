import { AutenticacaoActions } from '../autenticacao.actions.type';
import { IUser } from '../model/user.interface';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

export const autenticacaoFeatureKey = 'autenticacao';

export interface AutenticacaoState {
  carregando?: boolean;
  user?: IUser;
}

export const initialState: AutenticacaoState = {
  carregando: false,
  user: undefined,
};

export const reducers: ActionReducerMap<AutenticacaoState> = {};

export const autenticacaoReducer = createReducer(
  initialState,
  on(AutenticacaoActions.loginAction, (state, action) => {
    return {
      ...state,
      carregando: false,
      user: action.user,
    };
  })
);
