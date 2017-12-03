import { REMOVE_CUR_FROM_FAVORITE } from './';

export function removeCurFromFavorite(payload) {
    return {
        type: REMOVE_CUR_FROM_FAVORITE,
        payload
    };
}