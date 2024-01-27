import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const rename = createAction(
  'rename',
  props<{ name:string }>()
);
export const customincrement = createAction(
  'customincrement',
  props<{ value: number; actionType: string }>()
);
