import {takeEvery} from 'redux-saga/effects';

import {getShortUrlSaga} from './shortUrl';
import {GET_SHORT_URL} from '../../actions/types';

export function* watchGetShortUrl(){
    yield takeEvery(GET_SHORT_URL,getShortUrlSaga)
}