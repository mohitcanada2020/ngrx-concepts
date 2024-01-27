import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  customincrement,
  decrement,
  increment,
  rename,
  reset,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(rename, (state,action) => {
    return {
      ...state,
      channelname: action.name,
    };
  }),
  on(customincrement, (state, action) => {
    return {
      ...state,
      counter:
        action.actionType == 'add'
          ? state.counter + action.value
          : state.counter - action.value,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
