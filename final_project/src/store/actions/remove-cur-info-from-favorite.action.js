import { REMOVE_CUR_INFO_FROM_FAVORITE } from './';

export function removeCurInfoFromFavorite(payload) {
    return {
        type: REMOVE_CUR_INFO_FROM_FAVORITE,
        payload
    };
}