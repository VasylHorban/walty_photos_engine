import { takeEvery, put, select } from "redux-saga/effects";
import { fetchPhotos } from "../api/fetchPhotos";
import { setIsFetching } from "./app.reducer";
import { REQUEST_PHOTOS, setTagStorage } from "./search.reducer";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PHOTOS, photosRequest);
}

function* photosRequest() {
  try {
    yield put(setIsFetching(true));
    const tag = yield select((state) => state.search.inputValue);
    yield put(setTagStorage(tag));
    const response = yield fetchPhotos(tag);
    console.log(response);
    yield put(setIsFetching(false));
  } catch (err) {
    console.log(err);
  }
}
