import firebase from 'firebase';

import { POSTS_FETCH_SUCCESS } from './types.js';

export const fetchPosts = () => {
  const currentUser = firebase.auth().O;

  return (dispatch) => {
    firebase.database().ref(`Posts`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({ type: POSTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};
