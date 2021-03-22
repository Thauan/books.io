import { put, call } from 'redux-saga/effects';
import { login } from '../../utils/storage';
import history from '../history';
import api from '../../services/api';

export function* asyncAuth({ payload }: any): any {
  const body = {
    email: payload.email,
    password: payload.password,
  };

  try {
    const { data, headers } = yield call(api.post, '/auth/sign-in', body);

    login([headers.authorization]);

    yield call(history.push, '/home');
  } catch (error) {
    yield put({
      type: 'ERROR_LOGIN',
      message: 'Usuário ou senha inválida.',
    });
  }
}

export function* isAuth(): any {
  yield call(history.push, '/home');
}
