import { RequestService } from './request-service';
import { DateService } from './calc-date-service';
import { CurMovementEntity } from './cur-movement.entity.dto';

export class EntityCurMovementService {
    static getCurDynamics(Cur_ID) {
        const baseURL = 'http://www.nbrb.by/API/ExRates/Rates';
        let url = `${baseURL}/Dynamics/${Cur_ID}?startDate=${DateService.getMonthBeforeDate()}&endDate=${DateService.getTodayDate()}`;
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