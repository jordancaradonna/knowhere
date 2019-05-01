import { POSTS_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  posts: null,
  next: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
