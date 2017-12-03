import { SET_START_DATE } from '../actions';

const initialState = '';

export function setStartDateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_START_DATE:
            return action.payload;
        default:
            return state;
    }
}