import axios from 'axios';
import {put} from 'redux-saga/effects';
import { getShortUrlSuccess } from '../../actions/ShortUrlAction';

export function* getShortUrlSaga(action){
    try {
        const response = yield axios.get(`https://tinyurl.com/api-create.php?url=${action.url}`)
        yield put(getShortUrlSuccess(response.data))
    } catch (err){
        console.log("ERROR -> ",err )
    }
}