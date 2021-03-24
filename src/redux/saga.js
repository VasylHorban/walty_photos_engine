import { takeEvery, put, select, call, delay } from 'redux-saga/effects';
import { fetchPhotos } from '../api/fetchPhotos';
import {
  setAlertText,
  setIsAlert,
  setIsFetching,
  HIDE_ALERT,
} from './ducks/app';
import {
  REQUEST_PHOTOS,
  setPhotos,
  setTotalCount,
  setCurrentPage,
  setTagStorage,
} from './ducks/search';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PHOTOS, photosRequest);
  yield takeEvery(HIDE_ALERT, hideAlert);
}

function* photosRequest(action) {
  try {
    const state = yield select();
    const page = state.search.currentPage + 1;
    if (
      Math.ceil(state.search.totalCount / 20) < page &&
      state.search.totalCount !== 0
    ) {
      //when the photos are over
      yield put(setAlertText('No more photos'));
      console.log('No more photos');
      yield put(setIsAlert(true));
    } else {
      const payload = yield call(fetchPhotos, action.tags, page);
      if (payload.hits.length === 0) {
        //when there are no matches
        yield put(setAlertText('There are no photos for this match'));
        console.log('There are no photos for this match');
        yield put(setIsAlert(true));
      } else {
        if (state.search.totalCount === 0) {
          //when the first request
          yield put(setTotalCount(payload.total));
          yield put(setTagStorage(action.tags));
        }
        yield put(setCurrentPage(page));
        yield put(setPhotos(payload.hits));
        yield put(setIsFetching(false));
      }
    }
  } catch (err) {
    yield put(setAlertText('Server problem, try again later'));
    console.log('Server problem, try again later');
    console.log(err);
    yield put(setIsAlert(true));
    yield put(setIsFetching(false));
  }
}

function* hideAlert() {
  yield delay(3000);
  yield put(setIsAlert(false));
}
