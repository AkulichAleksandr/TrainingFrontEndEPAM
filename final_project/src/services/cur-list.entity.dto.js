export class CurListEntity {
    static getObjData(todayEntity, yesterdayEntity) {
        let data = [];
        for (let i = 0; i < todayEntity.length; i++) {
            let obj = {};
            let precision = 4;

            obj['Cur_ID'] = todayEntity[i]['Cur_ID'];
            obj['Cur_Name'] = todayEntity[i]['Cur_Abbreviation'] + ' ' +todayEntity[i]['Cur_Scale'];
            obj['Cur_Abbr'] = todayEntity[i]['Cur_Abbreviation'];
            obj['Cur_Scale'] = todayEntity[i]['Cur_Scale'];
            obj['Cur_OfficialRate'] = todayEntity[i]['Cur_OfficialRate'].toFixed(precision);
            obj['Cur_Change'] = (todayEntity[i]['Cur_OfficialRate'] - yesterdayEntity[i]['Cur_OfficialRate']).toFixed(precision);
            data.push(obj);
        }
        return data;
    }
}