import { RequestService } from './request-service';
import { DateService } from './calc-date-service';
import { CurListEntity } from './cur-list.entity.dto';

export class EntityCurListService {
    static getCurList() {
        const baseURL = 'http://www.nbrb.by/API/ExRates/Rates';
        let yesterdayLink = `${baseURL}?onDate=${DateService.getDayBeforeDate()}&Periodicity=0`;
        let todayLink = `${baseURL}?onDate=${DateService.getTodayDate()}&Periodicity=0`;
        let makeRequest = () => {
            return Promise.all([RequestService.httpGet(todayLink), RequestService.httpGet(yesterdayLink)])
                .then(([today, yesterday]) => {
                    today = JSON.parse(today);
                    yesterday = JSON.parse(yesterday);
                    return CurListEntity.getObjData(today, yesterday);
                });
        };
        return makeRequest();
    }
}