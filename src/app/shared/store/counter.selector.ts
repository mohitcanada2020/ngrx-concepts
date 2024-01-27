import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";


export const getcounterState = createFeatureSelector<CounterModel>('counter');

export const getCounter =  createSelector(getcounterState,(state)=>{
    return state.counter;
});

export const getchannelName =  createSelector(getcounterState,(state)=>{
    return state.channelname;
})

