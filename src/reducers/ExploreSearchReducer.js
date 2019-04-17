import {
    SEARCH_USER
  } from '../actions/types';
  
  const INITIAL_STATE = {
    search: ''
  }

  export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case SEARCH_USER:
            console.log(action.payload);
            return { ...state, search: action.payload };
        default:
            return state;
      }
  };