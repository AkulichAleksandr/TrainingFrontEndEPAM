var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var arrayOfURL = ['http://www.nbrb.by/API/ExRates/Rates/978?ParamMode=1',
    'http://www.nbrb.by/API/ExRates/Rates/RUB?ParamMode=2',
    'http://www.nbrb.by/API/ExRates/Rates/145',
    'http://www.nbrb.by/API/ExRates/Rates?onDate=2011-11-11&Periodicity=1',
    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'];

var xhr1 = new XMLHttpRequest();
function request1(callback) {
    xhr1.open('GET', arrayOfURL[0], true);
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState != 4) return;
        if (xhr1.status != 200) {
            console.log('==========\nRequest 1 to the server');
            console.log(xhr1.status + ': ' + xhr1.statusText);
        } else {
            console.log('==========\nRequest 1 to the server');
            console.log(xhr1.responseText);
        }
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    xhr1.send();
};

var xhr2 = new XMLHttpRequest();
function request2(callback) {
    xhr2.open('GET', arrayOfURL[1], true);
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState != 4) return;
        if (xhr2.status != 200) {
            console.log('==========\nRequest 2 to the server');
            console.log(xhr2.status + ': ' + xhr2.statusText);
        } else {
            console.log('==========\nRequest 2 to the server');
            console.log(xhr2.responseText);
        }
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    xhr2.send();
};

var xhr3 = new XMLHttpRequest();
function request3(callback) {
    xhr3.open('GET', arrayOfURL[2], true);
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState != 4) return;
        if (xhr3.status != 200) {
            console.log('==========\nRequest 3 to the server');
            console.log(xhr3.status + ': ' + xhr3.statusText);
        } else {
            console.log('==========\nRequest 3 to the server');
            console.log(xhr3.responseText);
        }
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    xhr3.send();
};

var xhr4 = new XMLHttpRequest();
function request4(callback) {
    xhr4.open('GET', arrayOfURL[3], true);
    xhr4.onreadystatechange = function () {
        if (xhr4.readyState != 4) return;
        if (xhr4.status != 200) {
            console.log('==========\nRequest 4 to the server');
            console.log(xhr4.status + ': ' + xhr4.statusText);
        } else {
            console.log('==========\nRequest 4 to the server');
            console.log(xhr4.responseText);
        }
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    xhr4.send();
};

var xhr5 = new XMLHttpRequest();
function request5(callback) {
    xhr5.open('GET', arrayOfURL[4], true);
    xhr5.onreadystatechange = function () {
        if (xhr5.readyState != 4) return;
        if (xhr5.status != 200) {
            console.log('==========\nRequest 5 to the server');
            console.log(xhr5.status + ': ' + xhr5.statusText);
        } else {
            console.log('==========\nRequest 5 to the server');
            console.log(xhr5.responseText);
        }
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    xhr5.send();
};

var num = 0;
var arrs = [];

function callAsync(arr) {
    if (arr) {
        arrs = arr;
    }
    if (arrs[num]) {
        arrs[num](callAsync);
        num++;
    } else {
        arrs = [];
        num = 0;
    }
};

callAsync([request1, request2, request3, request4, request5]);