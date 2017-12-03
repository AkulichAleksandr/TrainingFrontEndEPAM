import React from 'react';
import './app.css';

import { ConnectedNav } from './ak-nav';
import { ConnectedConverter } from './ak-converter';
import { ConnectedAbout } from './ak-about';
import { ConnectedFavorite } from './ak-favorite';
import { ConnectedCurrencies } from './ak-currencies';
import { ConnectedSearch } from './ak-search';
import { ConnectedSidebar } from './ak-sidebar';
import { Blank } from './ak-blank';

import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.downloadCurList();
    }

    render() {
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
                                            <ConnectedNav />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-wrapper__main">
                                <ConnectedAbout />
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
                                            <ConnectedNav />
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
                                            <ConnectedSearch />
                                        </div>
                                        <div className="ak-header__menu">
                                            <ConnectedNav />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-wrapper__sidebar">
                                <ConnectedSidebar />
                            </div>
                            {this.props.selectedCurInfo === ''? <Blank />:
                            <div className="ak-wrapper__main">
                                <Route exact path={'/'} component={ConnectedCurrencies}></Route>
                                <Route path={'/calculator'} component={ConnectedConverter}></Route>
                            </div>}
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}