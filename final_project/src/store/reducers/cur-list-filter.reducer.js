import { GET_FILTER_CELL } from '../actions';

const initialState = '';

export function curListFilterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILTER_CELL:
            return action.payload;

        default:
            return state;
    }
}