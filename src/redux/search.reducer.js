const SET_INPUT = "SEARCH/SET_INPUT";
const SET_PHOTOS = "SEARCH/SET_PHOTOS";
export const REQUEST_PHOTOS = "SEARCH/REQUEST_PHOTOS";
export const SET_TAG_STORAGE = "SEARCH/SET_TAG_STORAGE";

const initialState = {
  inputValue: "",
  tagStorage: [
    { id: 123123, text: "naruto" },
    { id: 13123, text: "sakura" },
  ],
  photosPage: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, inputValue: action.value };
    case SET_TAG_STORAGE:
      return {
        ...state,
        tagStorage:
          state.tagStorage.findIndex((tag) => tag.text === action.tag.text) > -1
            ? [...state.tagStorage]
            : [action.tag, ...state.tagStorage.slice(0, 2)],
      };
    default:
      return state;
  }
};

export const setInput = (value) => ({ type: SET_INPUT, value });
export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
export const requestPhotos = () => ({ type: REQUEST_PHOTOS });
export const setTagStorage = (tag) => ({
  type: SET_TAG_STORAGE,
  tag: {
    text: tag,
    id: Math.random(),
  },
});
export default searchReducer;
