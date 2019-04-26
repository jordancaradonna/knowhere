import firebase from 'firebase';
import {
    SEARCH_USER, SEARCH_USER_SUCCESS
  } from './types.js';

export const searchUser = (text) => {
    return {
      type: SEARCH_USER,
      payload: text
    };
  };

export const searchByUser = (action) => {
    try {
      return (dispatch) => {
        console.log('about to fetch filtered users');
        const ref = firebase.database().ref('users');
          ref.orderByChild('username').on('value', snapshot => {
           //let username = console.log(snapshot.val());
            dispatch({ type: SEARCH_USER_SUCCESS, payload: snapshot.val()});
          })
       // console.log('done fetching users', ref);
      }
    }
    catch(error) {
        console.log(error);
    }
  }

// export const profileFetch = () => {
//   const currentUser = firebase.auth().O;

//   return (dispatch) => {
//     firebase.database().ref(`users/${currentUser}/account`)
//       .on('value', snapshot => {
//         console.log(snapshot.val());
//         dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   }
// };