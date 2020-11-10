import {
    SHORT_URL,
    GET_SHORT_URL
 } from './types';

// When we get short url successfully, this runs
export const getShortUrlSuccess = (url) => {
	return { type: SHORT_URL, value: url }
}

// This function is call by saga
export const getShortUrl = (actualUrl) => {
    return {
        type: GET_SHORT_URL,
        url: actualUrl
    }
}