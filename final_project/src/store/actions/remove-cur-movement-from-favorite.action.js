import { REMOVE_CUR_MOVEMENT_FROM_FAVORITE } from './';

export function removeCurMovementFromFavorite(payload) {
    return {
        type: REMOVE_CUR_MOVEMENT_FROM_FAVORITE,
        payload
    };
}