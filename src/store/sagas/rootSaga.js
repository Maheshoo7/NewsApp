import {all} from 'redux-saga/effects';
import newsList from './newsList';

function* rootSaga() {
  yield all([newsList()]);
}

export default rootSaga;
