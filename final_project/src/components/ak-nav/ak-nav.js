import React from 'react';
import './ak-nav.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import { ConnectedNotification } from './../ak-notification';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="ak-nav">
                    <ul className="ak-nav__container">
                        <li className="ak-nav__line"><NavLink to="/">Currencies</NavLink></li>
                        <li className="ak-nav__line"><NavLink to="/calculator">Calculator</NavLink></li>
                        <li className="ak-nav__line"><NavLink to="/about">About</NavLink></li>
                        <li className="ak-nav__line"><NavLink to="/favorite">Favorite</NavLink>&#160;<ConnectedNotification /></li>
                    </ul>
                </div>
            </Router>
        );
    }
}