export class DateService {
    static getTodayDate() {
        let year = new Date().toLocaleString('en-US', { year: 'numeric' });
        let month = new Date().toLocaleString('en-US', { month: 'numeric' });
        let day = new Date().toLocaleString('en-US', { day: 'numeric' });
        return `${year}-${month}-${day}`;
    }

    static getDayBeforeDate() {
        let newDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
        let year = newDate.toLocaleString('en-US', { year: 'numeric' });
        let month = newDate.toLocaleString('en-US', { month: 'numeric' });
        let day = newDate.toLocaleString('en-US', { day: 'numeric' });
        return `${year}-${month}-${day}`;
    }

    static getMonthBeforeDate() {
        let newDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate());
        let year = newDate.toLocaleString('en-US', { year: 'numeric' });
        let month = newDate.toLocaleString('en-US', { month: 'numeric' });
        let day = newDate.toLocaleString('en-US', { day: 'numeric' });
        return `${year}-${month}-${day}`;
    }
}