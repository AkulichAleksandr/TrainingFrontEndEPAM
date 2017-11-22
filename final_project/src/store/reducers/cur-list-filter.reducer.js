import { GET_FILTER_CELL } from '../actions';

const initialState = {
    filterCell: ''
};

export function curListFilterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILTER_CELL: //'FILTERED'
            return Object.assign({}, state, { filterCell: action.payload });
        default:
            return state;
    }
}