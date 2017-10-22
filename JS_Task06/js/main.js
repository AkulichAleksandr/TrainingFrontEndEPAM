var createDatePicker = new function() {
    // get current year and current month
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();

    // get array of dates and create UI
    var obj = dateCalculation(currentYear, currentMonth);
    createButton();
    dateRenderBody(obj);

    var leftButton = document.querySelector('.ak-datepicker__left-button');
    var rightButton = document.querySelector('.ak-datepicker__right-button');

    // get the previous month
    leftButton.onclick = function () {
        currentMonth--;
        if (currentMonth === -1) {
            currentMonth = 11;
            currentYear--;
        };

        document.querySelector('.ak-datepicker__body').innerHTML = '';
        document.querySelector('.ak-datepicker__head').removeChild(document.querySelector('.ak-datepicker__month'));

        var obj = dateCalculation(currentYear, currentMonth);
        dateRenderBody(obj);
    }

    // get the next month
    rightButton.onclick = function () {
        currentMonth++;
        if (currentMonth === 12) {
            currentMonth = 0;
            currentYear++;
        };

        document.querySelector('.ak-datepicker__body').innerHTML = '';
        document.querySelector('.ak-datepicker__head').removeChild(document.querySelector('.ak-datepicker__month'));

        var obj = dateCalculation(currentYear, currentMonth);
        dateRenderBody(obj);
    }
}