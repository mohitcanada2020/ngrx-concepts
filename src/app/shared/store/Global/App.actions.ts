import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[app event] show alert';
export const EMPTY_ACTION = '[app event] empty alert';

export const showAlert = createAction(SHOW_ALERT, props<{ message: string }>());

export const emptyAction = createAction(EMPTY_ACTION);

export const LOAD_SPINNER = '[Material UI Soinner] load spinner';

export const loadspinner = createAction(
    LOAD_SPINNER,
    props<{ isLoaded: boolean }>()
  );
