var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

 var arrayOfURL = ['http://www.nbrb.by/API/ExRates/Rates/978?ParamMode=1',
                   'http://www.nbrb.by/API/ExRates/Rates/RUB?ParamMode=2',
                   'http://www.nbrb.by/API/ExRates/Rates/145',
                   'http://www.nbrb.by/API/ExRates/Rates?onDate=2011-11-11&Periodicity=1',
                   'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'];

function httpGet(url) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

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

console.log(arrayOfURL[0]);
httpGet(arrayOfURL[0]) 
    .then( 
        response => { 
            console.log(response + '\nRequest is completed successful\n==============================================================================');
            console.log(arrayOfURL[1]); 
            return httpGet(arrayOfURL[1]) 
        }, 
        error => console.log(error.message + '\nBad request\n=============================================================================='))
        .then( 
            response => { 
                console.log(response + '\nRequest is completed successful\n=============================================================================='); 
                console.log(arrayOfURL[2]);
                return httpGet(arrayOfURL[2]) 
            }, 
            error => console.log(error.message + '\nBad request\n=============================================================================='))
            .then( 
                response => { 
                    console.log(response + '\nRequest is completed successful\n=============================================================================='); 
                    console.log(arrayOfURL[3]);
                    return httpGet(arrayOfURL[3]) 
                }, 
                error => console.log(error.message + '\nBad request\n=============================================================================='))
                .then( 
                    response => { 
                        console.log(response + '\nRequest is completed successful\n=============================================================================='); 
                        console.log(arrayOfURL[4]);
                        return httpGet(arrayOfURL[4]) 
                }, 
                    error => console.log(error.message + '\nBad request\n=============================================================================='))
                    .then( 
                        response => console.log(response + '\nFINISH\n=============================================================================='), 
                        error => console.log(error.message + '\nFINISH\n=============================================================================='))