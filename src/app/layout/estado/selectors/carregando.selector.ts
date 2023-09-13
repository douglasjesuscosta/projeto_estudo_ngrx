import { createSelector } from '@ngrx/store';

import * as fromLayout from '../reducers/index';

export const carregamentoSelector = createSelector(
  (state: any) => state[fromLayout.layoutFeatureKey],
  (layout) => layout.carregando
);
