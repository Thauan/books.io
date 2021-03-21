import { put, call } from 'redux-saga/effects';
import { login, getToken } from '../../utils/storage';
import api from '../../services/api';

export function* asyncAuth({ payload }: any): any {
  const body = {
    email: payload.email,
    password: payload.password,
  };

  try {
    const { data, headers } = yield call(api.post, '/auth/sign-in', body);

    login([headers.authorization]);

    const token = getToken();

    console.log(token);
  } catch (error) {
    console.log(error);
  }
}
