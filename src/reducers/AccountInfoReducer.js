import {
  FNAME_CHANGED,
  LNAME_CHANGED,
  USERNAME_CHANGED,
  CITY_CHANGED,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  PROFILE_FETCH_SUCCESS,
  PHOTO_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  fname: '',
  lname: '',
  city: '',
  username: '',
  photo: null,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FNAME_CHANGED:
      return { ...state, fname: action.payload };
    case LNAME_CHANGED:
      return { ...state, lname: action.payload };
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case CITY_CHANGED:
      return { ...state, city: action.payload };
    case PHOTO_CHANGED:
      return { ...state, photo: action.payload };
    case CREATE_PROFILE:
      return { ...state, loading: true, error: '' };
    case CREATE_PROFILE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case CREATE_PROFILE_FAIL:
      return { ...state, error: action.payload, loading: false };
    case PROFILE_FETCH_SUCCESS:
      return { ...state,
        city: action.payload.city,
        username: action.payload.username,
        fname: action.payload.fname,
        lname: action.payload.lname };
    default:
      return state;
  }
};
