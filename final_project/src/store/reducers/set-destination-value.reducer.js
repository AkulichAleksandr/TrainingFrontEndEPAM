import { SET_DESTINATION_VALUE } from '../actions';

const initialState = '';

export function setDestinationValueReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DESTINATION_VALUE:
            return action.payload;

        default:
            return state;
    }
}