import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import auth from './auth';
import books from './books';
import loading from './loading';

const appReducer = combineReducers({
  router: connectRouter(history),
  auth,
  books,
  loading,
});

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default (state: any, action: any) => {
  return appReducer(state, action);
};
