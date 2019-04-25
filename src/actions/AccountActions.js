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
  PHOTO_CHANGED,
  SUBMIT_USERNAME,
  SUBMIT_CITY,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  FRIEND_REQUEST
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

export const submitUsername = ({username}) => {
  const currentUser = firebase.auth().O

  return (dispatch) => {
    dispatch({ type: SUBMIT_USERNAME });
    firebase.database().ref(`users/${currentUser}/account`)
      .update({ username })
      .then(user => editProfileSuccess(dispatch))
      .catch((error) => {
        console.log(error);
        editProfileFail(dispatch, error.message)
      });
    };
};

export const submitCity = ({city}) => {
  const currentUser = firebase.auth().O

  return (dispatch) => {
    dispatch({ type: SUBMIT_CITY });
    firebase.database().ref(`users/${currentUser}/account`)
      .update({ city })
      .then(user => editProfileSuccess(dispatch))
      .catch((error) => {
        console.log(error);
        editProfileFail(dispatch, error.message)
      });
    };
};

const editProfileFail = (dispatch, errorText) => {
  dispatch({
    type: EDIT_PROFILE_FAIL,
    payload: errorText
  });
};

const editProfileSuccess = (dispatch, callbackFunction) => {
  dispatch({
    type: EDIT_PROFILE_SUCCESS,
    payload: null
  });
};

// const friendRequest = () => {
//   const showAlert = () =>{
//      Alert.alert(
//         'Friend request sent'
//      )
//   }
// }