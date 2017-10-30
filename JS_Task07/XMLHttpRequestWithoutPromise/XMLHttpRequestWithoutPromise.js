var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var arrayOfURL = ['http://www.nbrb.by/API/ExRates/Rates/978?ParamMode=1',
               'http://www.nbrb.by/API/ExRates/Rates/RUB?ParamMode=2',
               'http://www.nbrb.by/API/ExRates/Rates/145',
               'http://www.nbrb.by/API/ExRates/Rates?onDate=2011-11-11&Periodicity=1',
               'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'];

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText + '\nBad request\n==============================================================================');
    } else {
        console.log(xhr.responseText);
        console.log('Request is completed successful\n==============================================================================');
        
    }
}

arrayOfURL.forEach(function (link) {
    console.log(link);
    xhr.open('GET', link, false);
    xhr.send();
    xhr.onreadystatechange();
})