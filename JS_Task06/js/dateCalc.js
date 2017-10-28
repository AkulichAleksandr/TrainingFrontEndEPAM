function DateCalculation() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();

    this.nameOfDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    this.arrayOfDate = [];
    this.monthAndYear = '';
}

DateCalculation.prototype.getArrayOfDate = function () {
    //calculation of the number of days in month
    var daysInMonth = 33 - new Date(this.currentYear, this.currentMonth, 33).getDate();

    //addition of dates of the current month to the array
    for (var i = 1; i <= daysInMonth; i++) {
        this.arrayOfDate.push(i);
    }

    //calculation of the first week day in month
    var firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth === 0) ? 7 : firstDayOfMonth;

    //addition of empty elements to the beginning of the array
    for (var i = 1; i < firstDayOfMonth; i++) {
        this.arrayOfDate.unshift('*');
    }

    //addition of empty elements to the end of the array
    var arrayOfDateLengthAfterUnshift = 7 - this.arrayOfDate.length % 7;
    if (arrayOfDateLengthAfterUnshift !== 7) {
        for (var i = 1; i <= arrayOfDateLengthAfterUnshift; i++) {
            this.arrayOfDate.push('*');
        }
    }

    var currentDay = (this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth()) ? new Date().getDate() : null;
    var currentDayIndex = this.arrayOfDate.indexOf(currentDay);
    if (currentDayIndex !== -1) {
        this.arrayOfDate[currentDayIndex] = [currentDay];
    };

    return this.arrayOfDate;

}

DateCalculation.prototype.getMonthAndYear = function () {
    this.monthAndYear = new Date(this.currentYear, this.currentMonth).toLocaleString("en-US", { year: 'numeric', month: 'long' });
}

DateCalculation.prototype.getPreviousMonth = function () {
    this.currentMonth--;
    if (this.currentMonth === -1) {
        this.currentMonth = 11;
        this.currentYear--;
    };
    this.arrayOfDate = [];
    this.getArrayOfDate();
}

DateCalculation.prototype.getNextMonth = function () {
    this.currentMonth++;
    if (this.currentMonth === 12) {
        this.currentMonth = 0;
        this.currentYear++;
    };
    this.arrayOfDate = [];
    this.getArrayOfDate();
}