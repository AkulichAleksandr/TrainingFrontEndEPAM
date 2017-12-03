import { SET_SELECTED_CUR_INFO } from './';

export function setSelectedCurInfo(...payload) {
    return {
        type: SET_SELECTED_CUR_INFO,
        payload
    };
}