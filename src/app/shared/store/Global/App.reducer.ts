import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './Global.state';
import { loadspinner } from '../Global/App.actions';

const _appReducer = createReducer(
  GlobalState,
  on(loadspinner, (state, action) => {
    return {
      ...state,
      isLoaded: action.isLoaded
    };
  })
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
