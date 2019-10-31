import { combineReducers } from 'redux';
import { randomPup } from './randomPup';
import { errorMsg } from './errorMsg';

export const rootReducer = combineReducers({
  randomPup,
  errorMsg
})