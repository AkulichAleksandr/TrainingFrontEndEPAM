import { GET_CUR_MOVEMENT_SUCCESS } from './';

import { EntityCurMovementService } from '../../services';

export function downloadCurMovement(id) {
        return (dispatch) => {
            // dispatch({
            //     type: 'GET_CUR_MOVEMENT_REQUEST'
            // });
            EntityCurMovementService.getCurDynamics(id)
                .then(data => {
                    dispatch({
                        type: GET_CUR_MOVEMENT_SUCCESS, //'GET_CUR_MOVEMENT_SUCCESS'
                        payload: data
                    });
                });
        };
    }