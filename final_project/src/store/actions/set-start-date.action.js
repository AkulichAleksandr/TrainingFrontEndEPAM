//import { GET_FILTER_CELL } from './';

export function setStartDate(anyParam) {
        let payload = new Date(anyParam);
        if (+payload >= Date.now() || +payload <= +new Date(2016, 6, 1) || isNaN(+payload)) {
            payload = '';
        }
    return {
        type: 'SET_START_DATE',
        payload
    };
}