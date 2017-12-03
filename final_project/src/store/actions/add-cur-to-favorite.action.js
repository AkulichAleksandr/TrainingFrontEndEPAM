import { ADD_CUR_TO_FAVORITE } from './';

export function addCurToFavorite() {
    return (dispatch, getState) => {
        let selectedCur = getState().selectedCurInfo;
        let favoriteCurList = getState().favoriteCurList;
        let firstArrElem = 0;

        if (!favoriteCurList.some((item) => item.Cur_ID === selectedCur[ firstArrElem ].Cur_ID) &&
            selectedCur[ firstArrElem ].Cur_ID !== '' ) {
                let payload = selectedCur;
                dispatch({
                    type: ADD_CUR_TO_FAVORITE,
                    payload
                });
        }
    };
}