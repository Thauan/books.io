import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { asyncAuth, isAuth } from './auth';

import { Types as BooksTypes } from '../ducks/books';
import { asyncGetBooks, asyncGetBookDetail } from './books';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(AuthTypes.ASYNC_LOGIN, asyncAuth),
    takeLatest(AuthTypes.ASYNC_REDIRECT_LOGGED, isAuth),
    takeLatest(BooksTypes.ASYNC_BOOKS, asyncGetBooks),
    takeLatest(BooksTypes.ASYNC_BOOK_DETAILS, asyncGetBookDetail),
  ]);
}
