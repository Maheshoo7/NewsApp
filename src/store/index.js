import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {combinedReducers} from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  combinedReducers,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);
