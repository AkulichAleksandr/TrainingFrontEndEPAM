import { SAVE_CUR_MOVEMENT } from './';

export function saveCurMovement() {
    return (dispatch, getState) => {
        let selectedCur = getState().selectedCurInfo;
        let monthArrayOfCurRate = getState().curMovement;
        let saveCurMovementObj = getState().saveCurMovement;
        let firstArrElem = 0;

        if (!Object.keys(saveCurMovementObj).some((item) => +item === +selectedCur[ firstArrElem ].Cur_ID)) {
            let payload = [selectedCur, monthArrayOfCurRate];

            dispatch({
                type: SAVE_CUR_MOVEMENT,
                payload
            });
        }
    };
}