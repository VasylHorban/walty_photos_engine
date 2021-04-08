import { fetchPhotos } from './../../api/fetchPhotos';
import { put, select, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { photo } from '../../types';
import { RootState } from './index';
import { setAlertText, setIsAlert, appActionType } from './app';
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
  photosRequest,
} from './search';
import { assert } from 'node:console';
import { runSaga } from '@redux-saga/core';

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
    const photos: Array<photo> = [];
    const expectedAction = { type: SET_PHOTOS, photos };
    expect(setPhotos(photos)).toEqual(expectedAction);
  });
  it(`should create an action to reques photos`, () => {
    const tags = 'test';
    const expectedAction = { type: REQUEST_PHOTOS, tags };
    expect(requestPhotos(tags)).toEqual(expectedAction);
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
  const tags = 'test test';
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
    const state = { ...initialState };
    const newState = searchReducer(state, setTotalCount(count));
    expect(newState.totalCount).toEqual(count);
  });
  it(`should set input value to 'test'`, () => {
    const state = { ...initialState };
    const newState = searchReducer(state, setInput(string));
    expect(newState.inputValue).toEqual(string);
  });
  it(`shoul add 1 tags object to tag storage`, () => {
    const state = { ...initialState };
    const newState = searchReducer(state, setTagStorage(tags));
    expect(newState.tagStorage.length).toEqual(1);
  });
});

// test('photosRequest', () => {
//   const action = requestPhotos('test');
//   const gen = cloneableGenerator(photosRequest)(action);
//   gen.next();
//   gen.next(12);
//   gen.next(13);
//   test('as', () => {
//     const clone = gen.clone();
//     expect(clone.next().value).toEqual(put(setAlertText('No more photos')))
//     expect(clone.next().value).toEqual(put(setIsAlert(true)))
//     expect(clone.next().done).toBeTruthy()
//   })
//   test('rew', () => {
//     const clone = gen.clone();
//     expect(clone.next().value).toEqual(put(setAlertText('No more photos')))
//     expect(clone.next().value).toEqual(put(setIsAlert(true)))
//     expect(clone.next().done).toBeTruthy()
//   })
// });

// describe('photosRequest', () => {
//   const action = requestPhotos('test')
//   const gen = photosRequest(action);
//   const totalCount = 0
//   expect(JSON.stringify(gen.next().value)).toStrictEqual(JSON.stringify(select((state : RootState) => state.search.totalCount)))
//   expect(JSON.stringify(gen.next().value)).toStrictEqual(JSON.stringify(select((state: RootState) => state.search.currentPage + 1)))
//   it(`when the photos are over it should set alert text to 'test' and set isAlert to 'true'`, () => {
//     expect(gen.next().value).toEqual(put(setAlertText('test')))
//   })
//   it('when the photos are over',()=>{

//   })
// })
// describe('photosRequest', () => {
//   const action = requestPhotos('test');
//   const gen = photosRequest(action);
//   gen.next();
//   gen.next(12); //set  totalCount
//   gen.next(13); //set page
//   it(`when the photos are over it should set alert text to 'test' and set isAlert to 'true'`, () => {
//         expect(gen.next().value).toEqual(put(setAlertText('test')))
//         expect(gen.next().value).toEqual(put(setIsAlert(true)))
//         expect(gen.next().done).toBeTruthy()
//   })
//   it(`when the photos are over it should set alert text to 'test' and set isAlert to 'true'`, () => {
//     expect(gen.next().value).toEqual(put(setAlertText('test')))
//     expect(gen.next().value).toEqual(put(setIsAlert(true)))
//     expect(gen.next().done).toBeTruthy()
// })
// )}
// test('photosRequest', assert => {
//     const action = requestPhotos('test');
//     const gen = cloneableGenerator(photosRequest)(action);
//     assert.deepEqual(
//       gen.next(select((state : RootState) => state.search.totalCount))).value,
//       put(changeUI(color)),
//       'it should dispatch an action to change the ui'
//     );

// });
describe('photosRequest' , () => {
  const action = requestPhotos('test');
   it(`it should set alert to 'true' and set alert text to 'No more photos' in case of photos are over`, () => {
    const dispatchedActions = Array<appActionType>;
    const expecteDispatchedActions = [setAlertText('No more photos'), setIsAlert(true)]
      const fakeStore = {
      getState: () => ({
        search: { totalCount: 39, currentPage: 2 },
        app: { isAlert: false, text: '' },
      }),
      dispatch: (action: appActionType) => dispatchedActions.push(action),
    };
    runSaga(fakeStore, photosRequest, action);
    expect(dispatchedActions).toEqual(expecteDispatchedActions);
  });
  it(`it should request photos and call saveRequestData in case of photos are not over`, () => {
      fetchPhotos = jest.fn(()=> Promise.resolve([]))
      const fakeStore = {
      getState: () => ({
        search: { totalCount: 41, currentPage: 1 },
        app: { isAlert: false, text: '' },
      })    
      };
    runSaga(fakeStore, photosRequest, action);
  });
})
