import React from 'react';
import './ak-currencies.css';

import { connect } from 'react-redux';

import { Datepicker } from '../ak-datepicker';
import { CurrencyTable } from '../ak-currency-table';

//action
import { setStartDate } from './../../store/actions';
import { setEndDate } from './../../store/actions';
import { addCurToFavorite } from './../../store/actions';
import { saveCurMovement } from './../../store/actions';

class Currencies extends React.Component {
    constructor(props) {
        super(props);

        this.dateFromCallback = this.dateFromCallback.bind(this);
        this.dateToCallback = this.dateToCallback.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    dateFromCallback(anyParam) {
        this.props.setStartDate(anyParam);
    }

    dateToCallback(anyParam) {
        this.props.setEndDate(anyParam);
    }

    addToFavorite() {
        let selectedCur = this.props.selectedCur;
        let favoriteCurList = this.props.favoriteCurList;
        let monthArrayOfCurRate = this.props.monthArrayOfCurRate;
        console.log(monthArrayOfCurRate);
        // console.log(selectedCur);
        // console.log(favoriteCurList);
        // console.log(!favoriteCurList.some((item) => item.Cur_ID === selectedCur[0].Cur_ID) );
        // //console.log(favoriteCurList.length === 0);
        if (!favoriteCurList.some((item) => item.Cur_ID === selectedCur[0].Cur_ID) && selectedCur[0].Cur_ID !== '' ) {
            this.props.addCurToFavorite(selectedCur);
            this.props.saveCurMovement(selectedCur, monthArrayOfCurRate);
        }
    }

    render() {
        return (
            <div className="ak-currencies">
                <div className="ak-currencies__container">
                    <div className="ak-currencies__button">
                        <input className="ak-button" type="button" value="To favorite" onClick={this.addToFavorite}/>
                    </div>
                    <div className="ak-currencies__datepickers">
                        <div className="ak-currencies__datepickers-item">
                            <Datepicker changeDateCallback={this.dateFromCallback} text={'Date From'} />
                        </div>
                        <div className="ak-currencies__datepickers-item">
                            <Datepicker changeDateCallback={this.dateToCallback} text={'Date To'} />
                        </div>
                    </div>
                    <div className="">
                        <CurrencyTable items={this.props.monthArrayOfCurRate} curTitle={this.props.curTitle} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //const initialArrayOfCur = state.curList.dataCurList;
    const monthArrayOfCurRate = state.curMovement;
    const curTitle = state.selectedCurInfo[0].Cur_Abbr;
    const selectedCur = state.selectedCurInfo;
    const favoriteCurList = state.favoriteCurList;
    return { monthArrayOfCurRate, curTitle, selectedCur, favoriteCurList };
};

const mapDispatchToProps = (dispatch) => ({
    // downloadCurList: (param) => dispatch(downloadCurList(param)),
    // downloadCurMovement: (param) => dispatch(downloadCurMovement(param)),
    // curListFilter: (param) => dispatch(curListFilter(param))
    setStartDate: (param) => dispatch(setStartDate(param)),
    setEndDate: (param) => dispatch(setEndDate(param)),
    addCurToFavorite: (param) => dispatch(addCurToFavorite(param)),
    saveCurMovement: (...param) => dispatch(saveCurMovement(...param))
});

export const ConnectedCurrencies = connect(mapStateToProps, mapDispatchToProps)(Currencies);