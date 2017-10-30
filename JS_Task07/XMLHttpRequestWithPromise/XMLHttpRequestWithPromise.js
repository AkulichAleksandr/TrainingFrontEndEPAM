var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var arrayOfURL = ['http://www.nbrb.by/API/ExRates/Rates/978?ParamMode=1',
    'http://www.nbrb.by/API/ExRates/Rates/RUB?ParamMode=2',
    'http://www.nbrb.by/API/ExRates/Rates/145',
    'http://www.nbrb.by/API/ExRates/Rates?onDate=2011-11-11&Periodicity=1',
    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'];

function httpGet(url) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(xhr.responseText);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };

        xhr.send();
    });
}

arrayOfURL.forEach(function (link) {
    console.log(link);
    httpGet(link)
        .then((function (response) {
            console.log(response + '\nRequest is completed successful\n==============================================================================');
        }), function (err) {
            console.log(err.message + '\nBad request\n==============================================================================');
        })
});