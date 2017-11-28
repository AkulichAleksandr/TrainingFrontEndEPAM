//import { GET_FILTER_CELL } from './';

export function removeCurFromFavorite(payload) {
    //console.log(payload);
    return {
        type: 'REMOVE_CUR_TO_FAVORITE', //'FILTERED'
        payload
    };
}