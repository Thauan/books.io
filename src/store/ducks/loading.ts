import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setLoading: ['load'],
});

export const INITIAL_STATE = {
  isLoading: false,
};

export const setLoading = (state = INITIAL_STATE, action: any): any => {
  return { ...state, isLoading: action.load };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
});
