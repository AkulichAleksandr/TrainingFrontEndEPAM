function httpGet(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            const status = 200;
            if (this.status === status) {
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

export function getLinkForCurList() {
    let currentYear = new Date().toLocaleString('en-US', { year: 'numeric' });
    let currentMonth = new Date().toLocaleString('en-US', { month: 'numeric' });
    let currentDate = new Date().toLocaleString('en-US', { day: 'numeric' });
    let todayLink = `http://www.nbrb.by/API/ExRates/Rates?onDate=${currentYear}-${currentMonth}-${currentDate}&Periodicity=0`;

    let theOtherDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    let theOtherYear = theOtherDay.toLocaleString('en-US', { year: 'numeric' });
    let theOtherMonth = theOtherDay.toLocaleString('en-US', { month: 'numeric' });
    let theOtherDate = theOtherDay.toLocaleString('en-US', { day: 'numeric' });
    let yesterdayLink = `http://www.nbrb.by/API/ExRates/Rates?onDate=${theOtherYear}-${theOtherMonth}-${theOtherDate}&Periodicity=0`;

    function getObjData(today, yesterday) {
        let data = [];
        for (let i = 0; i < today.length; i++) {
            let obj = {};
            obj['Cur_ID'] = today[i]['Cur_ID'];
            obj['Cur_Name'] = today[i]['Cur_Abbreviation'] + ' ' +today[i]['Cur_Scale'];
            obj['Abbr'] = today[i]['Cur_Abbreviation'];
            obj['Cur_Scale'] = today[i]['Cur_Scale'];
            obj['Cur_OfficialRate'] = today[i]['Cur_OfficialRate'].toFixed(4);
            obj['Cur_Change'] = (today[i]['Cur_OfficialRate'] - yesterday[i]['Cur_OfficialRate']).toFixed(4);
            data.push(obj);
        }
        return data;
    }

    let makeRequest = () => {
        return Promise.all([httpGet(todayLink), httpGet(yesterdayLink)])
            .then(([today, yesterday]) => {
                today = JSON.parse(today);
                yesterday = JSON.parse(yesterday);
                let ArrOfObj = getObjData(today, yesterday);
                return ArrOfObj;
            });
    };

    return makeRequest();
}

/*===============================================*/

export function getLinkForCurDynamics(Cur_ID) {
    let currentYear = new Date().toLocaleString('en-US', { year: 'numeric' });
    let currentMonth = new Date().toLocaleString('en-US', { month: 'numeric' });
    let currentDate = new Date().toLocaleString('en-US', { day: 'numeric' });
    let theOtherDay = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate());
    let theOtherYear = theOtherDay.toLocaleString('en-US', { year: 'numeric' });
    let theOtherMonth = theOtherDay.toLocaleString('en-US', { month: 'numeric' });
    let theOtherDate = theOtherDay.toLocaleString('en-US', { day: 'numeric' });
    let linkForMonthRateCur = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/${Cur_ID}?startDate=
    ${theOtherYear}-${theOtherMonth}-${theOtherDate}&endDate=${currentYear}-${currentMonth}-${currentDate}`;

    let makeRequest = () => {
        return Promise.all([httpGet(linkForMonthRateCur)])
            .then(([monthRateCur]) => {
                monthRateCur = JSON.parse(monthRateCur);
                return monthRateCur;
            });
    };

    return makeRequest();
}