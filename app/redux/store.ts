import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import MainReducer from './reducers/index';
import {MainSaga} from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(MainReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(MainSaga);

export {store};
