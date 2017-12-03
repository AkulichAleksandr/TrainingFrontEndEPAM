import { SET_END_DATE } from '../actions';

const initialState = '';

export function setEndDateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_END_DATE:
            return action.payload;

        default:
            return state;
    }
}