import { call, takeEvery } from 'redux-saga/effects'
import { types } from '../modules/A'
import API from '../../services/sampleAPI'

function* loadSaga(action) {
  const params = action.payload
  const { payload, error } = yield call(API.fetchSample, 'test')
  if (payload && !error) {
    // suucess action
  } else {
    // fail action
  }
  console.log('params: ', params)
  console.log('payload: ', payload)
  console.log('error: ', error)
}

export default function* aSaga() {
  // $FlowFixMe
  yield takeEvery(types.LOAD_PAGE, loadSaga)
}
