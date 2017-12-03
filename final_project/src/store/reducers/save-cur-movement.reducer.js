import { SAVE_CUR_MOVEMENT } from '../actions';

const initialState = {};

export function saveCurMovementReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CUR_MOVEMENT:
            let firstArrElem = 0, secondArrElem = 1;

            let key = action.payload[ firstArrElem ][ firstArrElem ].Cur_ID;
            let value = action.payload[ secondArrElem ];
            let obj = {};
            obj[key] = value;
            return Object.assign({}, state, obj);

        default:
            return state;
    }
}