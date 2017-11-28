import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from '../actions';

const initialState = [];

export function curMovementReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_MOVEMENT_REQUEST_SUCCESS: //'GET_CUR_MOVEMENT_SUCCESS'
            console.log(action.payload);
            return action.payload; //Object.assign({}, state, { dataCurMovement: action.payload });
        default:
            return state;
    }
}