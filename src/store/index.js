import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/ShortUrlReducer';
import { watchGetShortUrl } from './saga';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchGetShortUrl)