'use strict';

import createCalendar from './frontend/datepicker/datepicker.js';
import './frontend/datepicker/datepicker.css';

var calendar = createCalendar("calendar", 2017, 10);
var div = document.createElement('div');

div.innerHTML = calendar;
document.body.appendChild(div);