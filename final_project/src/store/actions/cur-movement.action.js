import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from './';
import { GET_CUR_MOVEMENT_SEND_REQUEST } from './';

import { EntityCurMovementService } from '../../services';
import { DateService } from '../../services';

export function downloadCurMovement(id, startDate, endDate) {

        if (+startDate > +endDate) {
            endDate = [startDate, startDate = endDate][0];
        }

        startDate = startDate === ''? '': DateService.parseDate(startDate);
        endDate = endDate === ''? '': DateService.parseDate(endDate);

        return (dispatch) => {
            dispatch({
                type: GET_CUR_MOVEMENT_SEND_REQUEST //'GET_CUR_MOVEMENT_REQUEST'
            });
            return EntityCurMovementService.getCurDynamics(id, startDate, endDate)
                .then(data => {
                    dispatch({
                        type: GET_CUR_MOVEMENT_REQUEST_SUCCESS, //'GET_CUR_MOVEMENT_SUCCESS'
                        payload: data
                    });
                });
        };
    }