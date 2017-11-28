//import { GET_FILTER_CELL } from './';

export function addCurToFavorite(payload) {
    //console.log(payload);
    return {
        type: 'ADD_CUR_TO_FAVORITE', //'FILTERED'
        payload
    };
}