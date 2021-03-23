const SET_PHOTOS = "SEARCH/SET_PHOTOS";
const SET_INPUT = "SEARCH/SET_INPUT";
export const REQUEST_PHOTOS = "SEARCH/REQUEST_PHOTOS";
export const SET_TAG_STORAGE = "SEARCH/SET_TAG_STORAGE";
export const SET_CURRENT_PAGE = "SEARCH/SET_CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SEARCH/SET_TOTAL_COUNT";
export const CLEAN_SEARCH = "SEARCH/CLEAN_SEARCH";

const initialState = {
  inputValue: "",
  totalCount: 0,
  currentPage: 0,
  photos: [],
  tagStorage : []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: [...state.photos, ...action.photos] };
    case CLEAN_SEARCH:
      return { ...state, photos: [], currentPage: 0, totalCount: 0, inputValue: ""};
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_INPUT:
      return { ...state, inputValue: action.value };
    case SET_TAG_STORAGE:
      return { ...state, tagStorage : [action.tags, ...state.tagStorage.slice(0, 2)] };
    default:
      return state;
  }
};

export const requestPhotos = (tags) => ({type: REQUEST_PHOTOS,tags});
export const setTagStorage = (tags) => ({
  type: SET_TAG_STORAGE,
  tags: {
    text: tags.split("+").join(' '),
    id: new Date().getTime(),
  },
});
export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT,totalCount});
export const setInput = (value) => ({ type: SET_INPUT, value });
export const cleanSearch = () => ({ type: CLEAN_SEARCH });

export default searchReducer;
