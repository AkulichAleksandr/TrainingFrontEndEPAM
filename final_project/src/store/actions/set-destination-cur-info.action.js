import { SET_DESTINATION_CUR_INFO } from './';

export function setDestinationCurInfo(id) {
    return (dispatch, getState) => {
        let initialArrayOfCur = getState().curList;
        let firstArrElem = 0;

        let selectedCurObj = initialArrayOfCur.filter((item) => item.Cur_ID === +id)[ firstArrElem ];
        let Cur_ID = selectedCurObj.Cur_ID;
        let Cur_Abbr = selectedCurObj.Cur_Abbr;
        let Cur_OfficialRate = selectedCurObj.Cur_OfficialRate;
        let Cur_Scale = selectedCurObj.Cur_Scale;
        let payload = [Cur_ID, Cur_Abbr, Cur_OfficialRate, Cur_Scale];

        dispatch({
            type: SET_DESTINATION_CUR_INFO,
            payload
        });
    };

}