export class DateService {
    static parseDate(date) {
        let year = date.toLocaleString('en-US', { year: 'numeric' });
        let month = date.toLocaleString('en-US', { month: 'numeric' });
        let day = date.toLocaleString('en-US', { day: 'numeric' });
        return `${year}-${month}-${day}`;
    }

    static getTodayDate() {
        let newDate = new Date();
        return this.parseDate(newDate);
    }

    static getDayBeforeDate() {
        let oneDay = 1;
        let newDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - oneDay);
        return this.parseDate(newDate);
    }

    static getMonthBeforeDate() {
        let oneMonth = 1;
        let newDate = new Date(new Date().getFullYear(), new Date().getMonth() - oneMonth, new Date().getDate());
        return this.parseDate(newDate);
    }
}