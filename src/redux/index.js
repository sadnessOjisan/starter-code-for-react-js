import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "modules/index";

const env = process.env.REACT_APP_ENV;
const middlewares = [];

switch (env) {
  case "local":
    middlewares.push(logger);
    break;
  case "development":
    middlewares.push(logger);
    break;
  case "production":
    middlewares.push(logger);
    break;
  default:
    break;
}

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
