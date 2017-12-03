import { SET_SELECTED_CUR_INFO } from '../actions';

const initialState = [{
    Cur_ID: '',
    Cur_Abbr: '',
    Cur_OfficialRate: '',
    Cur_Scale: ''
}];

export function setSelectedCurInfoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_CUR_INFO:
            let arrElemForState = 0;
            let arrElemForCurId = 0, arrElemForCurAbbr = 1, arrElemForCurRate = 2, arrElemForCurScale = 3;

            return [Object.assign({}, state[ arrElemForState ], {
                Cur_ID: action.payload[ arrElemForCurId ],
                Cur_Abbr: action.payload[ arrElemForCurAbbr ],
                Cur_OfficialRate: action.payload[ arrElemForCurRate ],
                Cur_Scale: action.payload[ arrElemForCurScale ]
            })];

        default:
            return state;
    }
}