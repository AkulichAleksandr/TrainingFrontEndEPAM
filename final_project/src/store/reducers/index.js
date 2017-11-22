import { combineReducers } from 'redux';


import { curListReducer } from './cur-list.reducer';
import { curMovementReducer } from './cur-movement.reducer';
import { curListFilterReducer } from './cur-list-filter.reducer';


export const appReducers = combineReducers({
    curList: curListReducer,
    curMovement: curMovementReducer,
    curListFilter: curListFilterReducer
});
