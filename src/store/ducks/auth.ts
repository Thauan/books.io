import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  asyncLogin: ['email', 'password'],
  errorLogin: ['message'],
  asyncRedirectLogged: null,
  setUserData: {},
  errorClear: null,
});

export const INITIAL_STATE = {
  MessagesError: '',
  userData: {},
};

export const setUserData = (state = INITIAL_STATE, action: any): any => {
  return { ...state, userData: action.userData };
};

export const errorLogin = (state = INITIAL_STATE, action: any): any => {
  return { ...state, MessagesError: action.message };
};

export const errorClear = (state = INITIAL_STATE): any => {
  return { ...state, MessagesError: [] };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER_DATA]: setUserData,
  [Types.ERROR_LOGIN]: errorLogin,
  [Types.ERROR_CLEAR]: errorClear,
});
