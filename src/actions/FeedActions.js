import firebase from 'firebase';

import { POSTS_FETCH_SUCCESS } from './types.js';

export const fetchPosts = () => {
  const currentUser = firebase.auth().O;
  var posts = [];
  return (dispatch) => {
    firebase.database().ref(`Posts`).orderByKey()
      .once('value', snapshot => {
        snapshot.forEach(item => {
          console.log(item.val());
          posts.push(item.val());
        })
        console.log('Final posts', posts)
        dispatch({ type: POSTS_FETCH_SUCCESS, payload: posts });
      });
  }
};
