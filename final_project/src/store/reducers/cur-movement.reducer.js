import { GET_CUR_MOVEMENT_SUCCESS } from '../actions';

const initialState = {
    dataCurMovement: []
};

export function curMovementReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_MOVEMENT_SUCCESS: //'GET_CUR_MOVEMENT_SUCCESS'
            return Object.assign({}, state, { dataCurMovement: action.payload });
        default:
            return state;
    }
}