import { takeEvery } from 'redux-saga/effects';
import { HIDE_ALERT, hidingAlert } from './ducks/app';
import { REQUEST_PHOTOS, photosRequest } from './ducks/search';

export function* rootSaga() {
  yield takeEvery(REQUEST_PHOTOS, photosRequest);
  yield takeEvery(HIDE_ALERT, hidingAlert);
}
