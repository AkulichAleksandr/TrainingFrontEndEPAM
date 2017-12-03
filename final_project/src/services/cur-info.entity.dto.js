export class CurInfoEntity {
    static getObjData(entity) {

        let obj = {};
        obj['Cur_Name_Eng'] = entity['Cur_Name_Eng'];
        obj['Cur_Abbreviation'] = entity['Cur_Abbreviation'];
        obj['Cur_DateStart'] = entity['Cur_DateStart'];
        obj['Cur_DateEnd'] = entity['Cur_DateEnd'];
        return obj;
    }
}