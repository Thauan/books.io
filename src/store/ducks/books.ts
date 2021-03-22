import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  asyncBooks: null,
  asyncBookDetails: null,
  setBooks: [],
  setBookDetail: {},
});

export const INITIAL_STATE = {
  books: [],
  bookDetail: {},
  error: '',
};

export const setBooks = (state = INITIAL_STATE, action: any): any => {
  return { ...state, books: action.books };
};

export const setBookDetail = (state = INITIAL_STATE, action: any): any => {
  return { ...state, bookDetail: action.bookDetail };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_BOOKS]: setBooks,
  [Types.SET_BOOK_DETAIL]: setBookDetail,
});
