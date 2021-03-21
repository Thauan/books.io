import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { asyncAuth } from './auth';

export default function* rootSaga(): any {
  return yield all([takeLatest(AuthTypes.ASYNC_LOGIN, asyncAuth)]);
}
