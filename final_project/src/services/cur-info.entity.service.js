import { RequestService } from './request-service';
import { CurInfoEntity } from './cur-info.entity.dto';

export class EntityCurInfoService {
    static getCurInfo(Cur_ID) {

        let url = `https://www.nbrb.by/API/ExRates/Currencies/${Cur_ID}`;
        let makeRequest = () => {
            return Promise.all([RequestService.httpGet(url)])
                .then(([curDescribe]) => {
                    curDescribe = JSON.parse(curDescribe);
                    return CurInfoEntity.getObjData(curDescribe);
                });
        };
        return makeRequest();
    }
}