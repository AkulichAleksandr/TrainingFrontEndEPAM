import React from 'react';
import './ak-converter.css';
import {Graph} from './../ak-graph';

import { connect } from 'react-redux';

import {ConverterInput} from './../ak-converter-input';

//actions
import { setDestinationCurInfo } from './../../store/actions';
import { setDestinationValue } from './../../store/actions';

class Converter extends React.Component {
    constructor(props) {
        super(props);

        this.precision = 6;
        this.setInputValue = this.setInputValue.bind(this);
        this.setSelectValue = this.setSelectValue.bind(this);
    }

    setInputValue(anyParam) {
        let selectedCur = this.props.selectedCur[0].Cur_OfficialRate/this.props.selectedCur[0].Cur_Scale;
        let destinationCur = this.props.destinationCur[0].Cur_OfficialRate/this.props.destinationCur[0].Cur_Scale;
        let res = (anyParam * selectedCur / destinationCur).toFixed(this.precision);
        this.props.setDestinationValue(res);
    }

    setSelectValue(anyParam) {
        let selectedCurObj = this.props.initialArrayOfCur.filter((item) => item.Cur_ID === +anyParam)[0];
        let Cur_ID = selectedCurObj.Cur_ID;
        let Cur_Abbr = selectedCurObj.Cur_Abbr;
        let Cur_OfficialRate = selectedCurObj.Cur_OfficialRate;
        let Cur_Scale = selectedCurObj.Cur_Scale;
        this.props.setDestinationCurInfo(Cur_ID, Cur_Abbr, Cur_OfficialRate, Cur_Scale);
    }

    render() {
        return (
            <div className="ak-converter">
                <div className="ak-converter__container">
                <ConverterInput text={'Value'} disabled={true}
                    items={this.props.selectedCur}
                    inputCallback={this.setInputValue}
                    selected={true}
                />
                <ConverterInput text={'Destination'} readOnly={true}
                    items={this.props.initialArrayOfCur}
                    selectCallback={this.setSelectValue}
                    destinationValue={this.props.destinationValue}
                />

                </div>
                    <Graph monthArrayOfCurRate={this.props.monthArrayOfCurRate}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList.dataCurList;
    const monthArrayOfCurRate = state.curMovement;
    const selectedCur = state.selectedCurInfo;
    const destinationCur = state.destinationCurInfo;
    const destinationValue = state.destinationValue;
    return { initialArrayOfCur, monthArrayOfCurRate, selectedCur, destinationCur, destinationValue };
};

const mapDispatchToProps = (dispatch) => ({
    setDestinationCurInfo: (...param) => dispatch(setDestinationCurInfo(...param)),
    setDestinationValue: (param) => dispatch(setDestinationValue(param))
});

export const ConnectedConverter = connect(mapStateToProps, mapDispatchToProps)(Converter);