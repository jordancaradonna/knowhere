import firebase from 'firebase';
import {
    SEARCH_USER
  } from './types.js';
export const searchUser = (text) => {
    return {
      type: SEARCH_USER,
      payload: text
    };
  };

export const searchByUser = (action) => {
    const currentUser = firebase.auth().O;

    firebase.database().ref(`users/${currentUser}/account`)
    try {
        console.log('about to fetch filtered users');
        const query = ref.orderByChild('username').startAt(action.textChanged);
       // const snapshot = yield call([query, query.once], 'value');
        console.log('done fetching users');
        console.log(snapshot);
    }
    catch(error) {
        console.log(error);
    }
};