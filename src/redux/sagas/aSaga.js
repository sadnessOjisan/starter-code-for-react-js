import { fork, call, take, put, takeEvery } from "redux-saga/effects";
import { types, actions } from "../modules/A";
import API from "../../services/sampleAPI";

function* loadSaga(action) {
  yield alert("fire saga");
  const { payload, error } = yield call(API.fetchSample, "test");
  console.log("error: ", error);
}

export default function* aSaga() {
  yield takeEvery(types.LOAD_PAGE, loadSaga);
}