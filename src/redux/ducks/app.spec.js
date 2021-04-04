import { delay, put } from '@redux-saga/core/effects';
import appReducer , {
  setIsFetching,
  SET_ISFETCHING,
  SET_ISALERT,
  setIsAlert,
  setAlertText,
  SET_ALERT_TEXT,
  HIDE_ALERT,
  hideAlert,
  hidingAlert
} from './app';

describe('actions', () => {
  it(`should create an action to set fetching 'true'`, () => {
    const isFetching = true;
    const expectedAction = { type: SET_ISFETCHING, isFetching };
    expect(setIsFetching(isFetching)).toEqual(expectedAction);
  });
  it(`should create an action to set alert to 'true'`, () => {
    const isAlert = true;
    const expectedAction = { type: SET_ISALERT, isAlert };
    expect(setIsAlert(isAlert)).toEqual(expectedAction);
  });
  it('should create an action to set alert text', () => {
    const text = 'test';
    const expectedAction = { type: SET_ALERT_TEXT, text };
    expect(setAlertText(text)).toEqual(expectedAction);
  });
  it('should create an action to hide alert', () => {
    const expectedAction = { type: HIDE_ALERT };
    expect(hideAlert()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  const mockState = {
    isFetching: false,
    isAlert: false,
    text: '',
  };

  it('should set isFetching to true', () => {
    const state = {...mockState}
    const isFetching = true;
    const newState = appReducer( state, setIsFetching(isFetching));
    expect(newState.isFetching).toEqual(isFetching);
  });
  it('should set isAlert to true', () => {
    const state = {...mockState}
    const isAlert = true;
    const newState = appReducer( state, setIsAlert(isAlert));
    expect(newState.isAlert).toEqual(isAlert);
  });
  it(`should set alert text to 'test'`, () => {
    const state = {...mockState}
    const text = 'test';
    const newState = appReducer( state, setAlertText(text));
    expect(newState.text).toEqual(text);
  });
});

describe('saga', () => {
  const gen = hidingAlert();
  it('should set delay for 3s', async()=> {
    expect(gen.next().value).toEqual(delay(3000))
  })
  it('should set isAlert to false', async()=> {
    expect(gen.next().value).toEqual(put(setIsAlert(false)))
  })
});
