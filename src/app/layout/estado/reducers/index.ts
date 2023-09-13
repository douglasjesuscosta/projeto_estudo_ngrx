import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions/layout.actions.type';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  carregando?: boolean;
}

export const initialState: LayoutState = {
  carregando: false,
};

export const layoutReducer = createReducer(
  initialState,
  on(LayoutActions.carregandoLoginAction, (state, action) => {
    console.log('REDUCER', action);
    return {
      ...state,
      carregando: action.value,
    };
  })
);
