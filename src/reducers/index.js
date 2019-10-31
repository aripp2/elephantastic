import { combineReducers } from 'redux';
import { randomPup } from './randomPup';
import { errorMsg } from './errorMsg';

export const rootReducers = combineReducers({
  randomPup,
  errorMsg
})