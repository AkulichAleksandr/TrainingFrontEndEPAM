'use strict';
import React, { Component } from 'react';

import { connect } from 'react-redux';

import './app.css';

import { Sidebar } from './ak-sidebar';
import { Search } from './ak-search';
import { Nav } from './ak-nav';
import { CurrencyTable } from './ak-currency-table';
import { CurrencyConverter } from './ak-currency-converter';

//import { EntityCurListService } from '../services'; //+
//import { EntityCurMovementService } from '../services'; //+

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

//actions
import { downloadCurList } from './../store/actions';
import { downloadCurMovement } from './../store/actions';
import { curListFilter } from './../store/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateCurList = this.updateCurList.bind(this);
        this.updateCurTable = this.updateCurTable.bind(this);
    }

    componentWillMount() {
        this.props.downloadCurList();
    }

    updateCurTable(curId) {
        this.props.downloadCurMovement(curId);
    }

    updateCurList(data) {
        this.props.curListFilter(data);
    }

    render() {
        const MonthArrayOfCurRate = this.props.MonthArrayOfCurRate;
        const WrappedCurrencyTable = function (props) {
            return <CurrencyTable {...props} items={MonthArrayOfCurRate} />;
        };

        const initialArrayOfCur = this.props.initialArrayOfCur;
        const WrappedConverter = function (props) {
            return <CurrencyConverter {...props} items={initialArrayOfCur} />;
        };

        return (
            <div className="ak-wrapper">
                <div className="ak-wrapper__header">
                    <div className="ak-header">
                        <div className="ak-header__container">
                            <div className="ak-header__search">
                                <Search
                                    searchCallback={this.updateCurList}
                                    data={this.props.initialArrayOfCur}
                                />
                            </div>
                            <div className="ak-header__menu">
                                <Nav />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-wrapper__sidebar">
                    <Sidebar
                        sidebarCallback={this.updateCurTable}
                        selectedCur={this.props.initialArrayOfCur}
                        FILT={this.props.searchString}
                    />
                </div>
                <div className="ak-wrapper__main">
                    <Router>
                        <Switch>
                            <Route exact path={'/'} render={() => {
                                return <div className="ak-wrapper__start-page">
                                    Hi! You can use currency converter or look through currency rate for the last month
                                    </div>;
                                }}>
                            </Route>
                            <Route path={'/currencytable'} component={WrappedCurrencyTable}></Route>
                            <Route path={'/currencyconverter'} component={WrappedConverter}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList.dataCurList;
    const MonthArrayOfCurRate = state.curMovement.dataCurMovement;
    const searchString = state.curListFilter.filterCell;
    return { initialArrayOfCur, MonthArrayOfCurRate, searchString };
};

const mapDispatchToProps = (dispatch) => ({
    downloadCurList: (param) => dispatch(downloadCurList(param)),
    downloadCurMovement: (param) => dispatch(downloadCurMovement(param)),
    curListFilter: (param) => dispatch(curListFilter(param))
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);