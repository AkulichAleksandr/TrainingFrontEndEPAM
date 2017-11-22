import React, { Component } from 'react';
import './ak-nav.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

export class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <div className="ak-nav">
                <ul className="ak-nav__container">
                    <li className="ak-nav__line"><NavLink to="/currencytable">Exchange Rate Table</NavLink></li>
                    <li className="ak-nav__line"><NavLink to="/currencyconverter">Currency Converter</NavLink></li>
                </ul>
            </div>
            </Router>
        );
    }
}