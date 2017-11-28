import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from './reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

//import {logger1} from './middleware';


export const appStore = createStore(
    appReducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);
