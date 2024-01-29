import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateModel } from './AppState.Model';
import { loadspinner } from '../Global/App.actions';

export const getappState = createFeatureSelector<AppStateModel>('app');

export const getspinnerstate = createSelector(getappState, (state) => {
  return state.isLoaded;
});
