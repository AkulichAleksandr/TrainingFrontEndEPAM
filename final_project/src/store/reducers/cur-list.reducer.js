import { GET_CUR_LIST_SUCCESS } from '../actions';

const initialState = {
    dataCurList: []
};

export function curListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUR_LIST_SUCCESS: //'GET_CUR_SUCCESS'
            return Object.assign({}, state, { dataCurList: action.payload });
        default:
            return state;
    }
}