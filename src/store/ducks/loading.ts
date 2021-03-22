import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setLoading: ['load'],
  setLoadingBook: ['load'],
});

export const INITIAL_STATE = {
  isLoading: false,
  isLoadingBook: false,
};

export const setLoading = (state = INITIAL_STATE, action: any): any => {
  return { ...state, isLoading: action.load };
};

export const setLoadingBook = (state = INITIAL_STATE, action: any): any => {
  return { ...state, isLoadingBook: action.load };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_LOADING_BOOK]: setLoadingBook,
});
