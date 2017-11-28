//import { GET_CUR_LIST_REQUEST_SUCCESS } from '../actions';

const initialState = [{
    Cur_ID: '',
    Cur_Abbr: '',
    Cur_OfficialRate: '',
    Cur_Scale: ''
}];

export function setSelectedCurInfoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_CUR_INFO': //'GET_CUR_SUCCESS'
            return [Object.assign({}, state[0], {
                Cur_ID: action.payload[0],
                Cur_Abbr: action.payload[1],
                Cur_OfficialRate: action.payload[2],
                Cur_Scale: action.payload[3]
            })];
        default:
            return state;
    }
}