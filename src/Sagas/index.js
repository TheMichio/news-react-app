import { getKeywordDone, getKeywordError, GET_KEYWORD_NEWS } from "../Actions";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const apiKey = "a2b1ab884c384d9f87cf160859d74b88";
const getApiUrl = (keyword) =>
  `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

const fetchKeywordNews = async (keyword) => {
  const res = await axios.get(getApiUrl(keyword));
  const data = res.data.articles;
  return data;
};

function* keywordNewsSaga({ payload }) {
  try {
    const news = yield call(fetchKeywordNews, payload);
    yield put(getKeywordDone(news));
  } catch (error) {
    yield put(getKeywordError(error));
  }
}

function* rootSaga() {
  yield takeLatest(GET_KEYWORD_NEWS, keywordNewsSaga);
}

export default rootSaga;
