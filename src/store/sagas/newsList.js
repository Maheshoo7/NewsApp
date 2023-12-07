import {put, delay, fork, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actions from '../actions/newsList';
import {constants} from '../actions/newsList';
import axios from 'axios';

function cutArrayFromIndices(arr, startIndex, endIndex) {
  return arr.slice(startIndex, endIndex + 1);
}

function* fetchNewsList({payload}) {
  try {
    const {limit, skip, isInternetReachable} = payload;

    if (isInternetReachable) {
      const url =
        'https://newsapi.org/v2/everything?sources=bbc-news&apiKey=bf3e3857596848d8ae747c8ddeed1e36';

      const response = yield axios.get(url);

      const articles = response?.data?.articles;

      if (!articles) {
        throw new Error();
      }

      yield AsyncStorage.setItem('articles', JSON.stringify(articles));
    }

    const storedData = yield AsyncStorage.getItem('articles');

    const data = JSON.parse(storedData);

    const slicedData = cutArrayFromIndices(data, skip, limit - 1);

    const totalCount = data.length;

    yield put(
      actions.fetchListSuccess({
        articles: slicedData,
        totalCount,
        limit,
      }),
    );
  } catch (e) {
    yield put(actions.fetchListFailure());
  }
}

function* fetchNewsBatch({payload}) {
  try {
    const {limit, skip} = payload;

    const storedData = yield AsyncStorage.getItem('articles');
    const data = JSON.parse(storedData);

    const slicedData = cutArrayFromIndices(data, skip, limit - 1);

    yield put(
      actions.fetchBatchSuccess({
        articles: slicedData,
        limit: limit,
        skip,
      }),
    );
  } catch (e) {
    yield put(actions.fetchBatchFailure());
  }
}

export default function* newsList() {
  yield takeLatest(constants.FETCH_LIST_PENDING, fetchNewsList);
  yield takeLatest(constants.FETCH_BATCH_PENDING, fetchNewsBatch);
}
