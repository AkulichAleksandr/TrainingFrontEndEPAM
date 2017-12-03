import { SHOW_FAVORITE_CUR_MOVEMENT } from './';

export function favoriteCurMovement(id) {
    return (dispatch, getState) => {
        let saveCurMovement = getState().saveCurMovement;
        let firstArrElem = 0;
        let payload = saveCurMovement[Object.keys(saveCurMovement).filter((item) => item === id)[ firstArrElem ]];

        dispatch({
            type: SHOW_FAVORITE_CUR_MOVEMENT,
            payload
        });
    };
}