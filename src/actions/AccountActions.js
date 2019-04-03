import firebase from 'firebase';
import { RNS3 } from 'react-native-aws3';
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

export const createProfile = ({fname, lname, username, city, photo}, callbackFunction ) => {
  const currentUser = firebase.auth().O;
  console.log('HERE HERE HERE', photo);
  return (dispatch) => {
    dispatch({ type: CREATE_PROFILE });
    const file = {
      uri: photo.uri,
      name: 'profile_pic.jpeg',
      type: 'image/jpeg',
    };

    const options = {
      keyPrefix: 'images/',
      bucket: 'knowhere-pictures',
      region: 'us-east-1',
      accessKey: 'AKIAJMD4JHWXJR2D25HA',
      secretKey: '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',
      successActionStatus: 201
    };

    RNS3.put(file, options).then(response => {
      if (response.status != 201) {
        throw new Error('Failed to upload image to s3', response);
      }
      console.log('***Body***', response.body);
    })
    .catch((error) => {
      console.log(error);
      createProfileFail(dispatch, error.message);
    });
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
