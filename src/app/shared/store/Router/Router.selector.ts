import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateModel } from './CustomSerializer';
import { RouterReducerState } from '@ngrx/router-store';

const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const getrouterinfo = createSelector(getRouterState, (state) => {
  return state.state.params['id'];
});
