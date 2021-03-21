import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';

const appReducer = combineReducers({
  router: connectRouter(history),
});

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default (state: any, action: any) => {
  return appReducer(state, action);
};
