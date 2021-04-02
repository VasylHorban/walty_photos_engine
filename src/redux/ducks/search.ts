import { put, select, call } from 'redux-saga/effects';

import { fetchPhotos } from '../../api/fetchPhotos';
import { setAlertText, setIsFetching, setIsAlert } from './app';
import { tag, photo, payload } from '../../types';
import { RootState } from './index'

export const SET_PHOTOS = 'SEARCH/SET_PHOTOS';
export const SET_INPUT = 'SEARCH/SET_INPUT';
export const SET_TAG_STORAGE = 'SEARCH/SET_TAG_STORAGE';
export const SET_CURRENT_PAGE = 'SEARCH/SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SEARCH/SET_TOTAL_COUNT';
export const CLEAN_SEARCH = 'SEARCH/CLEAN_SEARCH';
export const REQUEST_PHOTOS = 'SEARCH/REQUEST_PHOTOS';


export const initialState  = {
  inputValue: '',
  totalCount: 0,
  currentPage: 0,
  photos: [] as Array<photo>,
  tagStorage: [] as Array<tag>,
};

type state = typeof initialState;

type actionType =
  | requestPhotosType
  | setTagStorageType
  | setPhotosType
  | setCurrentPageType
  | setTotalCountType
  | setInputType
  | cleanSearchType;

const searchReducer = (state = initialState, action : actionType): state => {
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

type requestPhotosType = {
  type: typeof REQUEST_PHOTOS;
  tags: string;
};
export const requestPhotos = (tags: string): requestPhotosType => ({
  type: REQUEST_PHOTOS,
  tags,
});
type setTagStorageType = {
  type: typeof SET_TAG_STORAGE;
  tags: tag;
};
export const setTagStorage = (tags: string): setTagStorageType => ({
  type: SET_TAG_STORAGE,
  tags: {
    text: tags.split('+').join(' '),
    id: new Date().getTime(),
  },
});
type setPhotosType = {
  type: typeof SET_PHOTOS;
  photos: Array<photo>;
};
export const setPhotos = (photos: Array<photo>): setPhotosType => ({
  type: SET_PHOTOS,
  photos,
});

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type setTotalCountType = {
  type: typeof SET_TOTAL_COUNT;
  totalCount: number;
};
export const setTotalCount = (totalCount: number): setTotalCountType => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

type setInputType = {
  type: typeof SET_INPUT;
  value: string;
};
export const setInput = (value: string): setInputType => ({
  type: SET_INPUT,
  value,
});

type cleanSearchType = { type: typeof CLEAN_SEARCH };
export const cleanSearch = (): cleanSearchType => ({ type: CLEAN_SEARCH });

export function* photosRequest(action : requestPhotosType ) {
  try {
    const state : RootState = yield select();
    const page = state.search.currentPage + 1;
    const totalCount = state.search.totalCount;
    if (Math.ceil(totalCount / 20) < page && totalCount !== 0) {
      //when the photos are over
      yield put(setAlertText('No more photos'));
      console.log('No more photos');
      yield put(setIsAlert(true));
    } else {
      const payload : payload = yield call(fetchPhotos, action.tags, page);
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
