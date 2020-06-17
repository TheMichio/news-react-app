import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../Reducer";
import { logger } from "redux-logger";
import rootSaga from "../Sagas";

const reduxtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware, logger), reduxtools)
);

sagaMiddleware.run(rootSaga);

export default store;
