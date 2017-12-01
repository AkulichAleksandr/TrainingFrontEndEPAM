//import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from '../actions';

const initialState = [];

export function favoriteCurMovementReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVORITE_CUR_MOVEMENT': //'GET_CUR_MOVEMENT_SUCCESS'
            return action.payload; //Object.assign({}, state, { dataCurMovement: action.payload });
        default:
            return state;
    }
}