import { combineReducers } from 'redux';
import { randomPup } from './randomPup';
import { errorMsg } from './errorMsg';
import { favorites } from './favorites';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  randomPup,
  errorMsg,
  favorites,
  isLoading
})