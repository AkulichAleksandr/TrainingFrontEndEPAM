'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import createCalendar from './datepicker/datepicker.js';
import './datepicker/datepicker.css';


let calendar = createCalendar("calendar", 2017, 10);
let div = document.createElement('div');
div.innerHTML = calendar;
document.body.appendChild(div);

/* let element = React.createElement('div', null, calendar);
ReactDOM.render(element, document.body); */
