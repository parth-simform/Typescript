import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reduxSause';
import {MainSaga} from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(MainSaga);

export {store};
