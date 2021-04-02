import {
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
    const photos = [];
    const expectedAction = { type: SET_PHOTOS, photos };
    expect(setPhotos(photos)).toEqual(expectedAction);
  });
  it(`should create an action to reques photos`, () => {
    const expectedAction = { type: REQUEST_PHOTOS };
    expect(requestPhotos()).toEqual(expectedAction);
  });
});
