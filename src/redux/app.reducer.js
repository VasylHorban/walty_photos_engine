const SET_FETCHING = "APP/SET_FETCHING";

const initialState = {
  isFetching: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      console.log(state, action);
      return { ...state, isFetching: action.value };
    default:
      return state;
  }
};

export default appReducer;

export const setIsFetching = (value) => ({ type: SET_FETCHING, value });
