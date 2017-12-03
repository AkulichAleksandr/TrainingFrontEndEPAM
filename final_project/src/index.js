import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ConnectedApp } from './components/app-wrap.js';

import { Provider } from 'react-redux';

import { appStore } from './store';

ReactDOM.render(
    <Provider store={appStore}>
        <ConnectedApp />
    </Provider>,
    document.querySelector('#root'));