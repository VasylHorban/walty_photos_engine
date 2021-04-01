import { setIsFetching, SET_ISFETCHING, SET_ISALERT, setIsAlert, setAlertText, SET_ALERT_TEXT, HIDE_ALERT, hideAlert} from './app';

describe('actions', () => {
  it('should create an action to set fetching', () => {
    const isFetching = true;
    const expectedAction = { type: SET_ISFETCHING, isFetching};
    expect(setIsFetching(isFetching)).toEqual(expectedAction)
  });
  it('should create an action to set alert', () => {
    const isAlert = true;
    const expectedAction = { type: SET_ISALERT, isAlert};
    expect(setIsAlert(isAlert)).toEqual(expectedAction)
  });
  it('should create an action to set alert text', () => {
    const text = 'test';
    const expectedAction = { type: SET_ALERT_TEXT, text};
    expect(setAlertText(text)).toEqual(expectedAction)
  });
  it('should create an action to hide alert', () => {
    const expectedAction = { type: HIDE_ALERT};
    expect(hideAlert()).toEqual(expectedAction)
  });
});
