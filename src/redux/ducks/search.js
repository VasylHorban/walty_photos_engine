import { put, select, call } from 'redux-saga/effects';

import { fetchPhotos } from '../../api/fetchPhotos';
import { setAlertText, setIsFetching, setIsAlert } from './app';

const SET_PHOTOS = 'SEARCH/SET_PHOTOS';
const SET_INPUT = 'SEARCH/SET_INPUT';
const SET_TAG_STORAGE = 'SEARCH/SET_TAG_STORAGE';
const SET_CURRENT_PAGE = 'SEARCH/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SEARCH/SET_TOTAL_COUNT';
const CLEAN_SEARCH = 'SEARCH/CLEAN_SEARCH';
export const REQUEST_PHOTOS = 'SEARCH/REQUEST_PHOTOS';

const initialState = {
  inputValue: '',
  totalCount: 0,
  currentPage: 0,
  photos: [],
  tagStorage: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: [...state.photos, ...action.photos] };
    case CLEAN_SEARCH:
      return {
        ...state,
        photos: [],
        currentPage: 0,
        totalCount: 0,
        inputValue: '',
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_INPUT:
      return { ...state, inputValue: action.value };
    case SET_TAG_STORAGE:
      return {
        ...state,
        tagStorage: [action.tags, ...state.tagStorage.slice(0, 2)],
      };
    default:
      return state;
  }
};

export const requestPhotos = (tags) => ({ type: REQUEST_PHOTOS, tags });
export const setTagStorage = (tags) => ({
  type: SET_TAG_STORAGE,
  tags: {
    text: tags.split('+').join(' '),
    id: new Date().getTime(),
  },
});
export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setInput = (value) => ({ type: SET_INPUT, value });
export const cleanSearch = () => ({ type: CLEAN_SEARCH });

export function* photosRequest(action) {
  try {
    const state = yield select();
    const page = state.search.currentPage + 1;
    const totalCount = state.search.totalCount;
    if (Math.ceil(totalCount / 20) < page && totalCount !== 0) {
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

export default searchReducer;
