import { GET_CUR_INFO_SEND_REQUEST } from './';
import { GET_CUR_INFO_REQUEST_SUCCESS } from './';

import { EntityCurInfoService } from '../../services';

export function favoriteCurInfo(id) {
    return (dispatch) => {
        dispatch({
            type: GET_CUR_INFO_SEND_REQUEST
        });
        return EntityCurInfoService.getCurInfo(id)
            .then(data => {
                dispatch({
                    type: GET_CUR_INFO_REQUEST_SUCCESS,
                    payload: data
                });
            });
    };
}