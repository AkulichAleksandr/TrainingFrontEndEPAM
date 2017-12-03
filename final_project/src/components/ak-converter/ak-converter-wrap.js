import { connect } from 'react-redux';

import { Converter } from './ak-converter';

//actions
import { setDestinationCurInfo } from './../../store/actions';
import { setDestinationValue } from './../../store/actions';

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList;
    const monthArrayOfCurRate = state.curMovement;
    const selectedCur = state.selectedCurInfo;
    const destinationValue = state.destinationValue;
    return { initialArrayOfCur, monthArrayOfCurRate, selectedCur, destinationValue };
};

const mapDispatchToProps = (dispatch) => ({
    setDestinationCurInfo: (param) => dispatch(setDestinationCurInfo(param)),
    setDestinationValue: (param) => dispatch(setDestinationValue(param))
});
export const ConnectedConverter = connect( mapStateToProps, mapDispatchToProps )(Converter);