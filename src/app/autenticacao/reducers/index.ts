import { AutenticacaoActions } from '../autenticacao.actions.type';
import { IUser } from '../model/user.interface';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

export const autenticacaoFeatureKey = 'autenticacao';

export interface AutenticacaoState {
  user?: IUser;
}

export const initialState: AutenticacaoState = {
  user: undefined,
};

export const reducers: ActionReducerMap<AutenticacaoState> = {};

export const autenticacaoReducer = createReducer(
  initialState,
  on(AutenticacaoActions.loginAction, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);
