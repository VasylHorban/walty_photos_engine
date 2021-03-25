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

type stateType = typeof initialState;
type actionType = setIsFetchingType | setIsAlertType | hideAlertType | setAlertTextType;

const appReducer = (state = initialState, action : actionType) : stateType  => {
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

type setIsFetchingType = {
  type: typeof SET_ISFETHING
  isFetching : boolean
};
export const setIsFetching = (isFetching : boolean) : setIsFetchingType => ({
  type: SET_ISFETHING,
  isFetching,
});

type setIsAlertType = {
  type: typeof SET_ISALERT
  isAlert : boolean
};
export const setIsAlert = (isAlert : boolean) : setIsAlertType => ({
  type: SET_ISALERT,
  isAlert,
});

type hideAlertType = {
  type: typeof HIDE_ALERT
};
export const hideAlert = () : hideAlertType => ({ type: HIDE_ALERT });

type setAlertTextType = {
  type: typeof SET_ALERT_TEXT
  alertText : string
};
export const setAlertText = (alertText : string) : setAlertTextType  => ({
  type: SET_ALERT_TEXT,
  alertText,
});

export function* hidingAlert() {
  yield delay(3000);
  yield put(setIsAlert(false));
}

export default appReducer;
