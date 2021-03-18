const SET_INPUT = "SEARCH/SET_INPUT";
const SET_PHOTOS = "SEARCH/SET_PHOTOS";
const REQUEST_PHOTOS = "SEARCH/REQUEST_PHOTOS";

const initialState = {
    inputValue : '',
    tagStorage : [],
    photosPage : []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      console.log(state, action);
      return {...state, inputValue : action.photos} 
    case SET_PHOTOS:
      return {...state, photosPage : [...photosPage, action.photos].splice()}
    default:
        return state
  }
};

export const setInput = (value) => ({type: SET_INPUT,value });
export const setPhotos = (photos) => ({type: SET_PHOTOS,photos });


export default searchReducer;
