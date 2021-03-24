import { put, delay } from 'redux-saga/effects';

const SET_ISFETHING = 'APP/SET_ISFETHING';
const SET_ALERT_TEXT = 'APP/SET_ALERT_TEXT';
const SET_ISALERT = 'APP/SET_ISALERT';
export const HIDE_ALERT = 'APP/HIDE_ALERT';

const initialState = {
  isFetching: false,
  isAlert: false,
  alertText: '',
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISFETHING:
      return { ...state, isFetching: action.isFetching };
    case SET_ALERT_TEXT:
      return { ...state, alertText: action.alertText };
    case SET_ISALERT:
      return { ...state, isAlert: action.isAlert };
    default:
      return state;
  }
};

export const setIsFetching = (isFetching) => ({
  type: SET_ISFETHING,
  isFetching,
});
export const setIsAlert = (isAlert) => ({
  type: SET_ISALERT,
  isAlert,
});
export const hideAlert = () => ({ type: HIDE_ALERT });
export const setAlertText = (alertText) => ({
  type: SET_ALERT_TEXT,
  alertText,
});

export function* hidingAlert() {
  yield delay(3000);
  yield put(setIsAlert(false));
}

export default appReduser;
