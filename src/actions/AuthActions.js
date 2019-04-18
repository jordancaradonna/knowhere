import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  CONFIRM_PASSWORD_CHANGED,
  CREATE_FAIL,
  SUBMIT_HL,
  SUBMIT_UN
} from './types.js';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }, callbackFunction) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, callbackFunction))
      .catch((error) => {
        console.log(error);
        loginUserFail(dispatch, error.message)
      });
    };
};

export const createUser = ({ email, password, confirmPassword }, callbackFunction) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER });
    if(password === confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user, callbackFunction))
        .catch((error) => {
          console.log(error);
          createFail(dispatch, error.message);
        });
    }
    else
      createFail(dispatch, 'Passwords do not match');
  };
};

export const submitHL = (text) => {
  return {
    type: SUBMIT_HL,
    payload: text
  };
};

export const submitUN = (text) => {
  return {
    type: SUBMIT_UN,
    payload: text
  };
};

const loginUserFail = (dispatch, errorText) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errorText });
};

const loginUserSuccess = (dispatch, user, callbackFunction) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  callbackFunction();
};

const createFail = (dispatch, errorText) => {
  dispatch({type: CREATE_FAIL, payload: errorText });
};
