export const GET_KEYWORD_NEWS = "GET_KEYWORD_NEWS";
export const GET_KEYWORD_DONE = "GET_KEYWORD_DONE";
export const GET_KEYWORD_ERROR = "GET_KEYWORD_ERROR";

export const getKeywordNews = () => ({ type: GET_KEYWORD_NEWS });
export const getKeywordDone = (news) => ({
  type: GET_KEYWORD_DONE,
  payload: news,
});
export const getKeywordError = (error) => ({
  type: GET_KEYWORD_DONE,
  payload: error,
});
