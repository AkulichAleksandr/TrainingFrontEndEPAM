import { SET_DESTINATION_VALUE } from './';

export function setDestinationValue(value) {

    return (dispatch, getState) => {
        let precision = 6;
        let firstArrElem = 0;

        let selectedCurInfo = getState().selectedCurInfo[ firstArrElem ];
        let destinationCurInfo = getState().destinationCurInfo[ firstArrElem ];

        let selectedCur = selectedCurInfo.Cur_OfficialRate / selectedCurInfo.Cur_Scale;
        let destinationCur = destinationCurInfo.Cur_OfficialRate / destinationCurInfo.Cur_Scale;
        let payload = (value * selectedCur / destinationCur).toFixed(precision);

        dispatch({
            type: SET_DESTINATION_VALUE,
            payload
        });
    };
}