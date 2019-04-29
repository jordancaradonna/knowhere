import {
  FNAME_CHANGED,
  LNAME_CHANGED,
  USERNAME_CHANGED,
  CITY_CHANGED,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  PROFILE_FETCH_SUCCESS,
  PHOTO_CHANGED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  SUBMIT_USERNAME,
  SUBMIT_CITY,
  SUBMIT_PHOTO
} from '../actions/types';

const INITIAL_STATE = {
  fname: '',
  lname: '',
  city: '',
  username: '',
  photo: '',
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
      console.log('creating');
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
        lname: action.payload.lname,
        photo: action.payload.photoUrl
      };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, loading: false }
    case EDIT_PROFILE_FAIL:
      return { ...state, error: action.payload, loading: false };
    case SUBMIT_USERNAME:
      return { ...state, loading: true, error: '' };
    case SUBMIT_CITY:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
