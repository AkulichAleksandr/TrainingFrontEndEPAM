function dateCalculation(currentYear, currentMonth) {
    if (currentYear === undefined) currentYear = 2017;
    if (currentMonth === undefined) currentMonth = 9;
    var arrayOfDate = [];

    //calculation of current year/month/day
    var monthAndYear = new Date(currentYear, currentMonth).toLocaleString("en-US", { year: 'numeric', month: 'long' });
    var currentDay = (currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()) ? new Date().getDate() : null;

    //calculation of the number of days in month
    var daysInMonth = (function () {
        return 33 - new Date(currentYear, currentMonth, 33).getDate();
    })();

    //addition of dates of the current month to the array
    (function () {
        for (var i = 1; i <= daysInMonth; i++) {
            arrayOfDate.push(i);
        }
    })();

    //calculation of the first week day in month
    var firstDayOfMonth = (function () {
        var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        return firstDayOfMonth = (firstDayOfMonth === 0) ? 7 : firstDayOfMonth;
    })();

    //addition of empty elements to the beginning of the array
    (function () {
        for (var i = 1; i < firstDayOfMonth; i++) {
            arrayOfDate.unshift('*');
        }
    })();

    //addition of empty elements to the end of the array
    (function () {
        var arrayOfDateLengthAfterUnshift = 7 - arrayOfDate.length % 7;
        if (arrayOfDateLengthAfterUnshift !== 7) {
            for (var i = 1; i <= arrayOfDateLengthAfterUnshift; i++) {
                arrayOfDate.push('*');
            }
        }
    })();

    return {
        arrayOfDate: arrayOfDate,
        monthAndYear: monthAndYear,
        currentDay: currentDay,
    }
}