import { RequestService } from './request-service';
import { DateService } from './calc-date-service';
import { CurMovementEntity } from './cur-movement.entity.dto';

export class EntityCurMovementService {
    static getCurDynamics(Cur_ID, startDate, endDate) {

        const baseURL = 'http://www.nbrb.by/API/ExRates/Rates';
        let initStartDate = DateService.getMonthBeforeDate();
        let initEndtDate = DateService.getTodayDate();

        let url = `${baseURL}/Dynamics/${Cur_ID}?startDate=${startDate || initStartDate}&endDate=${endDate || initEndtDate}`;
        let makeRequest = () => {
            return Promise.all([RequestService.httpGet(url)])
                .then(([monthRateCur]) => {
                    monthRateCur = JSON.parse(monthRateCur);
                    return CurMovementEntity.getObjData(monthRateCur);
                });
        };
        return makeRequest();
    }
}