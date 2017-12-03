import { GET_CUR_LIST_REQUEST_SUCCESS } from './';
import { GET_CUR_LIST_SEND_REQUEST } from './';

import { EntityCurListService } from '../../services';

export function downloadCurList() {
    return (dispatch) => {
        dispatch({
            type: GET_CUR_LIST_SEND_REQUEST
        });
        return EntityCurListService.getCurList()
            .then(data => {
                dispatch({
                    type: GET_CUR_LIST_REQUEST_SUCCESS,
                    payload: data
                });
            });
    };
}