import { SHOW_FAVORITE_CUR_MOVEMENT } from '../actions';
import { REMOVE_CUR_MOVEMENT_FROM_FAVORITE } from '../actions';

const initialState = [];

export function favoriteCurMovementReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_FAVORITE_CUR_MOVEMENT:
            return action.payload;

        case REMOVE_CUR_MOVEMENT_FROM_FAVORITE:
            return [];

        default:
            return state;
    }
}