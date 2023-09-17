import { ActionReducerMap, createReducer } from '@ngrx/store';

export const cursoFeatureKey = 'curso';

export interface CursoState {
  curso?: any | null;
  listaCursos?: any[] | null;
}

export const initialState: CursoState = {
  curso: null,
  listaCursos: null,
};

export const reducers: ActionReducerMap<CursoState> = {};

export const cursoReducer = createReducer(initialState);
