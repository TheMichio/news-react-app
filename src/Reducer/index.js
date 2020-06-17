import {
  GET_KEYWORD_NEWS,
  GET_KEYWORD_DONE,
  GET_KEYWORD_ERROR,
} from "../Actions";

const initialState = {
  loading: false,
  news: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KEYWORD_NEWS:
      return { ...state, loading: true };
    case GET_KEYWORD_DONE:
      return { ...state, loading: false, news: action.payload };
    case GET_KEYWORD_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
