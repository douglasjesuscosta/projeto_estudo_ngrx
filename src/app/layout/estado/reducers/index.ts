import { ActionReducerMap, createReducer } from '@ngrx/store';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  carregando?: boolean;
}

export const initialState: LayoutState = {
  carregando: false,
};

export const reducers: ActionReducerMap<LayoutState> = {};

export const layoutReducer = createReducer(initialState);
