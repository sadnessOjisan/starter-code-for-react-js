import { fork, call, take, put, takeEvery } from "redux-saga/effects";
import { types, actions } from "../modules/A";

function* loadSaga(action) {
  yield alert("fire saga");
}

export default function* aSaga() {
  yield takeEvery(types.LOAD_PAGE, loadSaga);
}
