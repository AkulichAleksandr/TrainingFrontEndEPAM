'use strict';
import React, { Component } from 'react';

import './app.css';

import {Sidebar} from './sidebar/sidebar.js';
import {CurrencyTable} from './currencytable/currencytable.js';
import {Nav} from './nav/nav.js';
import {Search} from './search/search.js';
import {CurrencyConverter} from './currencyconverter/currencyconverter.js';
import { getLinkForCurList, getLinkForCurDynamics } from './Service.js';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialArrayOfCur: [],
            sortedArrayOfCur: [],
            MonthArrayOfCurRate: []
        };

        getLinkForCurList()
            .then((res) => {
                this.setState({ initialArrayOfCur: res });
                this.setState({ sortedArrayOfCur: res });
            });

        this.updateCurList = this.updateCurList.bind(this);
        this.updateCurTable = this.updateCurTable.bind(this);
    }

    updateCurTable(curId) {
        getLinkForCurDynamics(curId)
            .then((res) => {
                this.setState({ MonthArrayOfCurRate: res });
        });
    }

    updateCurList(newData) {
        this.setState({ sortedArrayOfCur: newData });
    }

    render() {
        const MonthArrayOfCurRate = this.state.MonthArrayOfCurRate;
        const WrappedCurrencyTable = function(props) {
            return <CurrencyTable {...props} items={MonthArrayOfCurRate} />;
        };

        const initialArrayOfCur = this.state.initialArrayOfCur;
        const WrappedConverter = function(props) {
            return <CurrencyConverter {...props} items={initialArrayOfCur} />;
        };

        return (
            <div className="ak-wrapper">
                <div className="ak-wrapper__header">
                    <div className="ak-header">
                        <div className="ak-header__container">
                            <div className="ak-header__search">
                                <Search searchCallback={this.updateCurList} data={this.state.initialArrayOfCur} />
                            </div>
                            <div className="ak-header__menu">
                                <Nav />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-wrapper__sidebar">
                    <Sidebar sidebarCallback = {this.updateCurTable} selectedCur={this.state.sortedArrayOfCur} />
                </div>
                <div className="ak-wrapper__main">
                    <Router>
                        <Switch>
                            <Route exact path={'/'} render={ () => {
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