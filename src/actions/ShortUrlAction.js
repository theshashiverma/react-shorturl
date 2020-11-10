import {
    SHORT_URL,
    GET_SHORT_URL
 } from './types';

export const getShortUrlSuccess = (url) => {
	return { type: SHORT_URL, value: url }
}

export const getShortUrl = (actualUrl) => {
    return {
        type: GET_SHORT_URL,
        url: actualUrl
    }
}