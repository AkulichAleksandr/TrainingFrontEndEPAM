'use strict';
import React from 'react';

import { connect } from 'react-redux';

import './app.css';

import { Sidebar } from './ak-sidebar';
import { Search } from './ak-search';
import { Nav } from './ak-nav';
import { CurrencyTable } from './ak-currency-table';
//import { CurrencyConverter } from './ak-currency-converter';
//import { Converter } from './ak-converter';
import { ConnectedConverter } from './ak-converter';

import { About } from './ak-about';
import { ConnectedFavorite } from './ak-favorite';
import { ConnectedCurrencies } from './ak-currencies';

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
import { setSelectedCurInfo } from './../store/actions';

import { appStore } from './../store';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateCurList = this.updateCurList.bind(this);
        this.updateCurTable = this.updateCurTable.bind(this);
    }

    componentWillMount() {
        this.props.downloadCurList();
    }

    updateCurTable(curId, curTitle, curRate, curScale) {
        let startDate = appStore.getState().startDate;
        let endDate = appStore.getState().endDate;
        //console.log(a);
        this.props.downloadCurMovement(curId, startDate, endDate);
        this.props.setSelectedCurInfo(curId, curTitle, curRate, curScale);
        console.log(curId);
        console.log(curTitle);
    }

    updateCurList(data) {
        this.props.curListFilter(data);
    }

    render() {
        // const MonthArrayOfCurRate = this.props.MonthArrayOfCurRate;
        // const WrappedCurrencyTable = function (props) {
        //     return <CurrencyTable {...props} items={MonthArrayOfCurRate} />;
        // };

        // const initialArrayOfCur = this.props.initialArrayOfCur;
        // const WrappedConverter = function (props) {
        //     return <Converter {...props} items={initialArrayOfCur} />;
        // };

        return (
            <Router>
                <Switch>
                    <Route path={'/about'}>
                        <div className="ak-wrapper">
                            <div className="ak-wrapper__header">
                                <div className="ak-header">
                                    <div className="ak-header__container">
                                        <div className="ak-header__search">
                                        </div>
                                        <div className="ak-header__menu">
                                            <Nav />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-wrapper__main">
                                <About />
                            </div>
                        </div>
                    </Route>

                    <Route path={'/favorite'}>
                        <div className="ak-wrapper">
                            <div className="ak-wrapper__header">
                                <div className="ak-header">
                                    <div className="ak-header__container">
                                        <div className="ak-header__search">
                                        </div>
                                        <div className="ak-header__menu">
                                            <Nav />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-wrapper__main">
                                <ConnectedFavorite />
                            </div>
                        </div>
                    </Route>

                    <Route path={'/'}>
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
                                <Route exact path={'/'} render={() => {
                                    return <div className="ak-wrapper__start-page">
                                        Hi! You can use currency converter or look through currency rate for the last month
                                    </div>;
                                }}>
                                </Route>
                                <Route path={'/currencies'} component={ConnectedCurrencies}></Route>
                                <Route path={'/calculator'} component={ConnectedConverter}></Route>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList.dataCurList;
    //const MonthArrayOfCurRate = state.curMovement.dataCurMovement;
    const searchString = state.curListFilter.filterCell;
    return { initialArrayOfCur, searchString };
};

const mapDispatchToProps = (dispatch) => ({
    downloadCurList: (param) => dispatch(downloadCurList(param)),
    downloadCurMovement: (curId, startDate, endDate) => dispatch(downloadCurMovement(curId, startDate, endDate)),
    curListFilter: (param) => dispatch(curListFilter(param)),
    setSelectedCurInfo: (...param) => dispatch(setSelectedCurInfo(...param))
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);