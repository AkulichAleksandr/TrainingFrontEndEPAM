import { GET_FILTER_CELL } from './';

export function curListFilter(payload) {
    return {
        type: GET_FILTER_CELL, //'FILTERED'
        payload
    };
}