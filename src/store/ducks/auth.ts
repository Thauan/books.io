import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  asyncLogin: ['email', 'password'],
  errorLogin: ['message'],
  asyncRedirectLogged: null,
  errorClear: null,
  userLogout: null,
});

export const INITIAL_STATE = {
  MessagesError: '',
};

export const errorLogin = (state = INITIAL_STATE, action: any): any => {
  return { ...state, MessagesError: action.message };
};

export const errorClear = (state = INITIAL_STATE): any => {
  return { ...state, MessagesError: [] };
};

export default createReducer(INITIAL_STATE, {
  [Types.ERROR_LOGIN]: errorLogin,
  [Types.ERROR_CLEAR]: errorClear,
});
