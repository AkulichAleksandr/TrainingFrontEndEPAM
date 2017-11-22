import { GET_CUR_LIST_SUCCESS } from './';
import { EntityCurListService } from '../../services';

export function downloadCurList() {
        return (dispatch) => {
            // dispatch({
            //     type: 'GET_CUR_REQUEST'
            // });
            EntityCurListService.getCurList()
                .then(data => {
                    dispatch({
                        type: GET_CUR_LIST_SUCCESS, //'GET_CUR_SUCCESS'
                        payload: data
                    });
                });
        };
    }