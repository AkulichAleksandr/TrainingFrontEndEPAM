//import { GET_FILTER_CELL } from '../actions';

const initialState = [];

export function changeCurFavoriteReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CUR_TO_FAVORITE': //'FILTERED'
            console.log(action.payload);
            console.log(state);
            //(state.some((item) => item.Cur_ID === action.payload))
            return [...state, ...action.payload];
        case 'REMOVE_CUR_TO_FAVORITE': //'FILTERED'

            let a = state.filter((item) => {
               console.log(item.Cur_ID === action.payload);
               //console.log(item.Cur_ID);
               return item.Cur_ID !== action.payload;
            });
           console.log(a);
            return a;
        default:
            return state;
    }
}