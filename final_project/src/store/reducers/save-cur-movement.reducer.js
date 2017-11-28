//import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from '../actions';

const initialState = {};

export function saveCurMovementReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_CUR_MOVEMENT': //'GET_CUR_MOVEMENT_SUCCESS'
            let key = action.payload[0][0].Cur_ID;
            let value = action.payload[1];
            let obj = {};
            obj[key] = value;
            // console.log(key);
            // console.log(value);
            console.log(state);
            return Object.assign({}, state, obj);
        default:
            return state;
    }
}