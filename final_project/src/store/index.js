import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from './reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const appStore = createStore(
    appReducers,
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
);
