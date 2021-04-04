import { put, select, call } from 'redux-saga/effects';
import { photo } from '../../types';
import { RootState } from './index';

import searchReducer, {
  initialState,
  cleanSearch,
  CLEAN_SEARCH,
  setInput,
  SET_INPUT,
  setTotalCount,
  setCurrentPage,
  SET_CURRENT_PAGE,
  SET_TAG_STORAGE,
  SET_TOTAL_COUNT,
  setPhotos,
  setTagStorage,
  SET_PHOTOS,
  REQUEST_PHOTOS,
  requestPhotos,
  photosRequest
} from './search';

describe('actions', () => {
  it('should create an action to clean serach', () => {
    const expectedAction = { type: CLEAN_SEARCH };
    expect(cleanSearch()).toEqual(expectedAction);
  });
  it(`should create an action to set input value to 'test'`, () => {
    const value = 'test';
    const expectedAction = { type: SET_INPUT, value };
    expect(setInput(value)).toEqual(expectedAction);
  });
  it(`should create an action to set current page to '4'`, () => {
    const currentPage = 4;
    const expectedAction = { type: SET_CURRENT_PAGE, currentPage };
    expect(setCurrentPage(currentPage)).toEqual(expectedAction);
  });
  it(`should create an action to set total count to '300'`, () => {
    const totalCount = 300;
    const expectedAction = { type: SET_TOTAL_COUNT, totalCount };
    expect(setTotalCount(totalCount)).toEqual(expectedAction);
  });
  it(`should create an action to set tag storage`, () => {
    const tags = 'orange test';
    const expectedAction = {
      type: SET_TAG_STORAGE,
      tags: {
        text: tags.split('+').join(' '),
        id: new Date().getTime(),
      },
    };
    expect(setTagStorage(tags).tags.text).toEqual(expectedAction.tags.text);
  });
  it(`should create an action to set total count to '300'`, () => {
    const totalCount = 300;
    const expectedAction = { type: SET_TOTAL_COUNT, totalCount };
    expect(setTotalCount(totalCount)).toEqual(expectedAction);
  });
  it(`should create an action to set photos to an empty array`, () => {
    const photos : Array<photo> = [];
    const expectedAction = { type: SET_PHOTOS, photos };
    expect(setPhotos(photos)).toEqual(expectedAction);
  });
  it(`should create an action to reques photos`, () => {
    const expectedAction = { type: REQUEST_PHOTOS };
    expect(requestPhotos('test')).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  const string = 'test';
  const number = 1010;
  const photos = [
    {
      id: number,
      pageURL: string,
      type: string,
      tags: string,
      previewURL: string,
      previewWidth: number,
      previewHeight: number,
      webformatURL: string,
      webformatWidth: number,
      webformatHeight: number,
      largeImageURL: string,
      imageWidth: number,
      imageHeight: number,
      imageSize: number,
      views: number,
      downloads: number,
      favorites: number,
      likes: number,
      comments: number,
      user_id: number,
      user: string,
      userImageURL: string,
    },
    {
      id: number,
      pageURL: string,
      type: string,
      tags: string,
      previewURL: string,
      previewWidth: number,
      previewHeight: number,
      webformatURL: string,
      webformatWidth: number,
      webformatHeight: number,
      largeImageURL: string,
      imageWidth: number,
      imageHeight: number,
      imageSize: number,
      views: number,
      downloads: number,
      favorites: number,
      likes: number,
      comments: number,
      user_id: number,
      user: string,
      userImageURL: string,
    },
  ];
  const tags = 'test test'
  it('should add 2 photo', () => {
    const state = { ...initialState };
    const newState = searchReducer(state, setPhotos(photos));
    expect(newState.photos.length).toEqual(2);
  });
  it(`should set current page to '5'`, () => {
    const page = 5;
    const state = { ...initialState };
    const newState = searchReducer(state, setCurrentPage(page));
    expect(newState.currentPage).toEqual(page);
  });
  it(`should clear search state current page to '0'`, () => {
    const state = {
      ...initialState,
      currentPage: number,
    };
    const newState = searchReducer(state, cleanSearch());
    expect(newState.currentPage).toEqual(0);
  });
  it(`should clear search state total count to '0'`, () => {
    const state = {
      ...initialState,
      totalCount: number,
    };
    const newState = searchReducer(state, cleanSearch());
    expect(newState.totalCount).toEqual(0);
  });
  it(`should clear search state input value ''`, () => {
    const state = {
      ...initialState,
      inputValue: string,
    };
    const newState = searchReducer(state, cleanSearch());
    expect(newState.inputValue).toEqual('');
  });
  it(`should set total count to '4'`, () => {
    const count = 4;
    const state = {...initialState};
    const newState = searchReducer(state, setTotalCount(count));
    expect(newState.totalCount).toEqual(count);
  });
  it(`should set input value to 'test'`, () => {
    const state = {...initialState};
    const newState = searchReducer(state, setInput(string));
    expect(newState.inputValue).toEqual(string);
  });
  it(`shoul add 1 tags object to tag storage`, () => {
    const state = {...initialState};
    const newState = searchReducer(state, setTagStorage(tags));
    expect(newState.tagStorage.length).toEqual(1);
  })
});

describe('photosRequest', () => {
  const action = requestPhotos('test')
  const gen = photosRequest(action);
  expect(gen.next().value).toStrictEqual(select((state : RootState) => state.search.totalCount))



})