import { fork, all } from "redux-saga/effects";
import aSaga from "./aSaga";

function* rootSaga() {
  yield all([fork(aSaga)]);
}

export default rootSaga;
