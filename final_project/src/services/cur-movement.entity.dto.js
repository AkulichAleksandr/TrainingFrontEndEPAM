export class CurMovementEntity {
    static getObjData(entity) {
        let data = [];
        for (let i = 0; i < entity.length; i++) {
            let obj = {};
            obj['Date'] = entity[i]['Date'].slice(0,10);
            obj['Cur_OfficialRate'] = entity[i]['Cur_OfficialRate'].toFixed(4);
            data.push(obj);
        }
        return data;
    }
}