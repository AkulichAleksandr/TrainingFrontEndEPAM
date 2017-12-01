import { combineReducers } from 'redux';


import { curListReducer } from './cur-list.reducer';
import { curMovementReducer } from './cur-movement.reducer';
import { curListFilterReducer } from './cur-list-filter.reducer';
import { setStartDateReducer } from './set-start-date.reducer';
import { setEndDateReducer } from './set-end-date.reducer';
import { setSelectedCurInfoReducer } from './set-selected-cur-info.reducer';
import { setDestinationCurInfoReducer } from './set-destination-cur-info.reducer';
import { setDestinationValueReducer } from './set-destination-value.reducer';
import { changeCurFavoriteReducer } from './change-cur-favorite.reducer';
import { saveCurMovementReducer } from './save-cur-movement.reducer';
import { favoriteCurMovementReducer } from './favorite-cur-movement.reducer';

export const appReducers = combineReducers({
    curList: curListReducer,
    curMovement: curMovementReducer,
    curListFilter: curListFilterReducer,
    startDate: setStartDateReducer,
    endDate: setEndDateReducer,
    selectedCurInfo: setSelectedCurInfoReducer,
    destinationCurInfo: setDestinationCurInfoReducer,
    destinationValue: setDestinationValueReducer,
    favoriteCurList: changeCurFavoriteReducer,
    saveCurMovement: saveCurMovementReducer,
    favoriteCurMovement: favoriteCurMovementReducer
});
