import { connect } from 'react-redux';

import { Currencies } from './ak-currencies';

//action
import { setStartDate } from './../../store/actions';
import { setEndDate } from './../../store/actions';
import { addCurToFavorite } from './../../store/actions';
import { saveCurMovement } from './../../store/actions';
import { downloadCurMovement } from './../../store/actions';

const mapStateToProps = (state) => {
    const monthArrayOfCurRate = state.curMovement;
    return { monthArrayOfCurRate };
};

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (param) => dispatch(setStartDate(param)),
    setEndDate: (param) => dispatch(setEndDate(param)),
    addCurToFavorite: (param) => dispatch(addCurToFavorite(param)),
    saveCurMovement: (param) => dispatch(saveCurMovement(param)),
    downloadCurMovement: (param) => dispatch(downloadCurMovement(param))
});

export const ConnectedCurrencies = connect(mapStateToProps, mapDispatchToProps)(Currencies);