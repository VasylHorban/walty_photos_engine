const SET_PHOTOS = "SEARCH/SET_PHOTOS";
const CLEAN_PHOTOS = "SEARCH/CLEAN_PHOTOS";
export const REQUEST_PHOTOS = "SEARCH/REQUEST_PHOTOS";
export const SET_TAG_STORAGE = "SEARCH/SET_TAG_STORAGE";
export const SET_CURRENT_PAGE = "SEARCH/SET_CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SEARCH/SET_TOTAL_COUNT";

const initialState = {
  totalCount: 0,
  currentPage: 0,
  photos: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: [...state.photos, ...action.photos] };
    case CLEAN_PHOTOS:
      return { ...state, photos: [] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
export const requestPhotos = (tags) => ({
  type: REQUEST_PHOTOS,
  tags: tags.split(" ").join("+"),
});
export const setTagStorage = (tags) => ({
  type: SET_TAG_STORAGE,
  serach: {
    tags: tags.split(" "),
    id: Math.random(),
  },
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const cleanPhotos = () => ({ type: CLEAN_PHOTOS });

export default searchReducer;
