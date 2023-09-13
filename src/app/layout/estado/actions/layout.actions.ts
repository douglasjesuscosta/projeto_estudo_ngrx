import { createAction, props } from '@ngrx/store';

export const carregandoLoginAction = createAction('[Login page] Carregando', props<{ value: boolean }>());

export const conclusaoCarregandoLoginAction = createAction('[Login page] Carregado');
