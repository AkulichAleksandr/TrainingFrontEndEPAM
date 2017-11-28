//import { GET_FILTER_CELL } from './';

export function saveCurMovement(...payload) {
    console.log(payload[1]);
    return {
        type: 'SAVE_CUR_MOVEMENT',
        payload
    };
}