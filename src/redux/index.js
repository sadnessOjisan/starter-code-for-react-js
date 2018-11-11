import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./modules";
import rootSaga from "./sagas";

const env = process.env.REACT_APP_ENV;
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

switch (env) {
  case "local":
    middlewares.push(sagaMiddleware);
    middlewares.push(logger);
    break;
  case "development":
    middlewares.push(sagaMiddleware);
    middlewares.push(logger);
    break;
  case "staging":
    middlewares.push(sagaMiddleware);
    break;
  case "production":
    middlewares.push(sagaMiddleware);
    break;
  default:
    middlewares.push(sagaMiddleware);
    middlewares.push(logger);
    break;
}

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
