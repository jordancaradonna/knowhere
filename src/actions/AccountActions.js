import firebase from 'firebase';

import {
  FNAME_CHANGED,
  LNAME_CHANGED,
  USERNAME_CHANGED,
  CITY_CHANGED,
  CREATE_PROFILE
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

export const createProfile = ({fname, lname, username, city}, callbackFunction ) => {
  return (dispatch) => {
    dispatch({ type: CREATE_PROFILE });
    const currentUser = firebase.auth().O;
    console.log('currentUser:', currentUser);
    firebase.database().ref(`users/${currentUser}/account`)
      .set({ fname, lname, username, city })
      .then(user => createProfileSuccess(dispatch, user, callbackFunction))
      .catch((error) => {
        console.log(error);
        createProfileFail(dispatch, error.message)
      });
    };
};
