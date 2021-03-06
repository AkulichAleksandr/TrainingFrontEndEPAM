import { SET_END_DATE } from './';

export function setEndDate(anyParam) {
    let payload = new Date(anyParam);
    let minYear = 2016, minMonth = 6, minDay = 1;

    if (+payload >= Date.now() || +payload <= +new Date(minYear, minMonth, minDay) || isNaN(+payload)) {
        payload = '';
    }
    return {
        type: SET_END_DATE,
        payload
    };
}