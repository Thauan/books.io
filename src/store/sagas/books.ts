import { put, call } from 'redux-saga/effects';
import history from '../history';
import api from '../../services/api';

export function* asyncGetBooks({ payload }: any): any {
  try {
    yield put({ type: 'SET_LOADING', load: true });

    const { data } = yield call(
      api.get,
      `/books?page=${payload}&amount=12&category=biographies`,
    );

    yield put({ type: 'SET_BOOKS', books: data });

    yield put({ type: 'SET_LOADING', load: false });
  } catch (error) {
    console.log(error);
  }
}

export function* asyncGetBookDetail({ payload }: any): any {
  try {
    const { data } = yield call(api.get, `/books/${payload}`);

    yield put({ type: 'SET_BOOK_DETAIL', bookDetail: data });
  } catch (error) {
    console.log(error);
  }
}

export function* isAuth(): any {
  yield call(history.push, '/home');
}
