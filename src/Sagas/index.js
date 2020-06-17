import { getKeywordDone, getKeywordError, GET_KEYWORD_NEWS } from "../Actions";
import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const apiUrl = "www.google.com";

const fetchKeywordNews = async (keyword) => {
  const res = await axios.get(apiUrl);
  const data = await res.json();
  console.log(data);
};

function* keywordNewsSaga(keyword) {
  try {
    const news = yield call(fetchKeywordNews(keyword));
    yield put(getKeywordDone(news));
  } catch (error) {
    yield put(getKeywordError(error));
  }
}

function* actionWatcher() {
  yield takeLatest(GET_KEYWORD_NEWS, keywordNewsSaga);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}

export default rootSaga;
