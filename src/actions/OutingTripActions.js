import firebase from 'firebase';
import timestampToDate from 'timestamp-to-date';
import {
  DESCRIPTION_CHANGED,
  OUTING_PHOTO_CHANGED,
  LOCATION_CHANGED,
  PRIVACY_CHANGED,
  CREATE_OUTING,
  CREATE_OUTING_FAIL,
  CREATE_OUTING_SUCCESS
} from './types.js';

export const descriptionChanged = (text) => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text
  };
};

export const outingPhotoChanged = (image) => {
  return {
    type: OUTING_PHOTO_CHANGED,
    payload: image
  };
};

export const locationChanged = (text) => {
  return {
    type: LOCATION_CHANGED,
    payload: text
  };
};
export const privacyChanged = (priv) => {
  return {
    type: PRIVACY_CHANGED,
    payload: priv
  };
};

export const createOuting = ({ description, outingPhoto, location, privacy, username, profilePhoto }, callbackFunction) => {
  const currentuser = firebase.auth().O;
  const timestamp = timestampToDate('1484448039504','yyyy-MM-dd HH:mm:ss');
  const uid = currentuser;
  return async (dispatch) => {
    dispatch({ type: CREATE_OUTING });
    firebase.database().ref(`Posts`)
      .push({ author: { username, profilePhoto, uid }, description, location, privacy, timestamp, })
      .then( async(snap) => {
        const key = snap.key
        console.log(key);
        const photoUrl = await uploadImageAsync(outingPhoto.uri, key)
        firebase.database().ref(`Posts/${key}`)
        .update({ photoUrl });
        firebase.database().ref(`users/${currentuser}/posts/${key}`)
        .set(key);
      })
      .then(user => createOutingSuccess(dispatch, callbackFunction))
      .catch((error) => {
        console.log(error);
        createOutingFail(dispatch, error.message)
    });
  };
};

async function uploadImageAsync(uri, key) {
  const currentUser = firebase.auth().O;
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  console.log('IS IT STILL WORKING?', blob);

  const ref = firebase
    .storage()
    .ref()
    .child(`${key}`);
  const snapshot = await ref.put(blob);

  console.log('PLease help', ref);

  // We're done with the blob, close and release it
  blob.close();
  const urlObj = await snapshot.ref.getDownloadURL();
  return urlObj;
}

const createOutingFail = (dispatch, errorText) => {
  dispatch({
    type: CREATE_OUTING_FAIL,
    payload: errorText
  });
};

const createOutingSuccess = (dispatch, callbackFunction) => {
  dispatch({
    type: CREATE_OUTING_SUCCESS,
    payload: null
  });
  callbackFunction();
};
