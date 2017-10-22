function createButton() {
    //create left button
    (function createLeftButton() {
        var parentElem = document.querySelector('.ak-datepicker__head');
        var div = document.createElement('div');
        div.className = "ak-datepicker__left-button";
        div.innerHTML = '&#171;';
        parentElem.appendChild(div);
    })();

    //create right button
    (function createLeftRight() {
        var parentElem = document.querySelector('.ak-datepicker__head');
        var div = document.createElement('div');
        div.className = "ak-datepicker__right-button";
        div.innerHTML = '&#187;';
        parentElem.appendChild(div);
    })();
}

function dateRenderBody(obj) {
    //create name of the month and year
    (function createHead() {
        var parentElem = document.querySelector('.ak-datepicker__head');
        var div = document.createElement('div');
        div.className = "ak-datepicker__month";
        div.innerHTML = obj.monthAndYear;
        parentElem.appendChild(div);
    })();

    //create the list of week days
    (function createTitle() {
        var parentElem = document.querySelector('.ak-datepicker__body');
        var nameOfDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
        for (var i = 0; i < nameOfDays.length; i++) {
            var div = document.createElement('div');
            div.className = "ak-datepicker__title";
            div.innerHTML = nameOfDays[i];
            parentElem.appendChild(div);
        }
    })();

    //create all days of the month
    (function createBody() {
        var parentElem = document.querySelector('.ak-datepicker__body');
        for (var i = 0; i < obj.arrayOfDate.length; i++) {
            var div = document.createElement('div');
            div.className = (obj.arrayOfDate[i] === obj.currentDay) ? "ak-datepicker__days-of-month ak-datepicker__current-day" : "ak-datepicker__days-of-month";
            div.innerHTML = obj.arrayOfDate[i];
            parentElem.appendChild(div);
        }
    })();
}