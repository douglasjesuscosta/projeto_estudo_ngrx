import { createAction } from '@ngrx/store';

export const carregandoLoginAction = createAction('[Login page] Carregando');

export const conclusaoCarregandoLoginAction = createAction(
  '[Login page] Carregado'
);
