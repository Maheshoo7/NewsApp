import {combineReducers} from 'redux';
import newsList from './newsList';

export const combinedReducers = combineReducers({
  newsList: newsList,
});
