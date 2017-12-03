import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from '../actions';

const initialState = [];

export function curMovementReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_MOVEMENT_REQUEST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}