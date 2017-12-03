export class CurMovementEntity {
    static getObjData(entity) {
        let data = [];
        for (let i = 0; i < entity.length; i++) {
            let obj = {};
            let startString = 0, endString = 10, precision = 4;

            obj['Date'] = entity[i]['Date'].slice(startString, endString);
            obj['Cur_OfficialRate'] = entity[i]['Cur_OfficialRate'].toFixed(precision);
            data.push(obj);
        }
        return data;
    }
}