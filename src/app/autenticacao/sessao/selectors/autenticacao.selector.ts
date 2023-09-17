import { createSelector } from '@ngrx/store';

export const usuarioEstaLogadoSelector = createSelector(
  (state: any) => state['autenticacao'],
  (autenticacao) => !!autenticacao.usuarioLogado
);

export const obterUsuarioLogadoSelector = createSelector(
  (state: any) => state['autenticacao'],
  (autenticacao) => autenticacao.user
);
