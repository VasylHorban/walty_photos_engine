import { takeEvery, put, select, call } from "redux-saga/effects";
import { fetchPhotos } from "../api/fetchPhotos";
import { setAlertText, setIsAlert, setIsFetching } from "./app.reducer";
import {
  REQUEST_PHOTOS,
  setPhotos,
  setTotalCount,
  setCurrentPage,
} from "./search.reducer";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PHOTOS, photosRequest);
}

function* photosRequest(action) {
  try {
    const state = yield select();
    if (
      state.search.totalCount <= state.search.photos.length &&
      state.search.totalCount !== 0
    ) {
      yield put(setAlertText("No more photos"));
      yield put(setIsAlert(true));
    } else {
      const page = state.search.currentPage + 1;
      const payload = yield call(fetchPhotos, action.tags, page);
      console.log(action.tags, page)
      if (payload.hits.length === 0) {
        yield put(setAlertText("There are no photos for this match"));
        console.log("There are no photos for this match")
        yield put(setIsAlert(true));
      } else {
        if (state.search.totalCount === 0) {
          yield put(setTotalCount(payload.total));
        }
        yield put(setCurrentPage(page));
        yield put(setPhotos(payload.hits));
        yield put(setIsFetching(false));

      }
    }
  } catch (err) {
    yield put(setAlertText("Server problem, try again later"));
    yield put(setIsAlert(true));
    yield put(setIsFetching(false));
    console.log(err);
  }

}
