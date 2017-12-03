import { ADD_CUR_TO_FAVORITE } from '../actions';
import { REMOVE_CUR_FROM_FAVORITE } from '../actions';

const initialState = [];

export function changeCurFavoriteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CUR_TO_FAVORITE:
            return [...state, ...action.payload];

        case REMOVE_CUR_FROM_FAVORITE:
            let newState = state.filter((item) => item.Cur_ID !== action.payload);
            return newState;

        default:
            return state;
    }
}