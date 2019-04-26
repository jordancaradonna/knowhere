import {
    SEARCH_USER,
    SEARCH_USER_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    search: '',
    searchUser: '',

  }

  export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case SEARCH_USER:
            console.log(action.payload);
            return { ...state, search: action.payload };
        case SEARCH_USER_SUCCESS: 
          console.log(action.payload);
          return { ...state, searchUser: action.payload}
        default:
            return state;
      }
  };
