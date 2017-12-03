import { GET_CUR_MOVEMENT_REQUEST_SUCCESS } from './';
import { GET_CUR_MOVEMENT_SEND_REQUEST } from './';

import { EntityCurMovementService } from '../../services';
import { DateService } from '../../services';

export function downloadCurMovement(id) {
        return (dispatch, getState) => {
            dispatch({
                type: GET_CUR_MOVEMENT_SEND_REQUEST
            });

            let firstArrElem = 0;
            let startDate = getState().startDate;
            let endDate = getState().endDate;
            let selectedCurId = getState().selectedCurInfo[ firstArrElem ].Cur_ID;

            if (+startDate > +endDate) {
                endDate = [startDate, startDate = endDate][ firstArrElem ];
            }

            startDate = startDate === ''? '': DateService.parseDate(startDate);
            endDate = endDate === ''? '': DateService.parseDate(endDate);

            return EntityCurMovementService.getCurDynamics(id || selectedCurId, startDate, endDate)
                .then(data => {
                    dispatch({
                        type: GET_CUR_MOVEMENT_REQUEST_SUCCESS,
                        payload: data
                    });
                });
        };
    }