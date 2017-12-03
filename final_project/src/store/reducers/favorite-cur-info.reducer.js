import { GET_CUR_INFO_REQUEST_SUCCESS } from '../actions';
import { REMOVE_CUR_INFO_FROM_FAVORITE } from '../actions';

const initialState = {};

export function favoriteCurInfoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_INFO_REQUEST_SUCCESS:
            return action.payload;

        case REMOVE_CUR_INFO_FROM_FAVORITE:
            return {};

        default:
            return state;
    }
}