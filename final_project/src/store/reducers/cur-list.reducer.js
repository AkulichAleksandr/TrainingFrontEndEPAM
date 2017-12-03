import { GET_CUR_LIST_REQUEST_SUCCESS } from '../actions';

const initialState = [];

export function curListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_LIST_REQUEST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
