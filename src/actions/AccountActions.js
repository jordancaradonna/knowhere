import firebase from 'firebase';
import {
  FNAME_CHANGED,
  LNAME_CHANGED,
  USERNAME_CHANGED,
  CITY_CHANGED,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  PROFILE_FETCH_SUCCESS,
  PHOTO_CHANGED
} from './types.js';

export const fnameChanged = (text) => {
  return {
    type: FNAME_CHANGED,
    payload: text
  };
};
export const lnameChanged = (text) => {
  return {
    type: LNAME_CHANGED,
    payload: text
  };
};
export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};
export const cityChanged = (text) => {
  return {
    type: CITY_CHANGED,
    payload: text
  };
};
export const photoChanged = (image) => {
  return {
    type: PHOTO_CHANGED,
    payload: image
  };
};

export const createProfile = ({fname, lname, username, city}, callbackFunction ) => {
  const currentUser = firebase.auth().O;

  return (dispatch) => {
    dispatch({ type: CREATE_PROFILE });
    firebase.database().ref(`users/${currentUser}/account`)
      .set({ fname, lname, username, city })
      .then(user => createProfileSuccess(dispatch, callbackFunction))
      .catch((error) => {
        console.log(error);
        createProfileFail(dispatch, error.message)
      });
    };
};

const createProfileFail = (dispatch, errorText) => {
  dispatch({
    type: CREATE_PROFILE_FAIL, 
    payload: errorText
  });
};

const createProfileSuccess = (dispatch, callbackFunction) => {
  dispatch({
    type: CREATE_PROFILE_SUCCESS,
    payload: null
  });
  callbackFunction();
};

export const profileFetch = () => {
  const currentUser = firebase.auth().O;

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser}/account`)
      .on('value', snapshot => {
        console.log(snapshot.val())
        dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};
