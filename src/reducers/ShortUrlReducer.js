// Reducer for shor url
import {
    SHORT_URL
 } from '../actions/types';

// Initial state value
const INITIAL_STATE = {
    shortUrl: null
}

const ShortUrlReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // Case for getting short url
        case SHORT_URL :
            return {
                ...state,
                shortUrl: action.value
            }
        default:
            return {...state}
    }
}

export default ShortUrlReducer;