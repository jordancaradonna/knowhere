import { POSTS_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  posts: [],
  next: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
