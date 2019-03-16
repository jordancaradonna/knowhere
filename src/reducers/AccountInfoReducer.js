import {
  FNAME_CHANGED,
  LNAME_CHANGED,
  USERNAME_CHANGED,
  CITY_CHANGED,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL
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
      console.log(action.payload)
      return { ...state, fname: action.payload };
    case LNAME_CHANGED:
      console.log(action.payload)
      return { ...state, lname: action.payload };
    case USERNAME_CHANGED:
      console.log(action.payload)
      return { ...state, username: action.payload };
    case CITY_CHANGED:
      console.log(action.payload)
      return { ...state, city: action.payload };
    case CREATE_PROFILE:
      console.log('creating');
      return { ...state, loading: true, error: '' };
    case CREATE_PROFILE_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_PROFILE_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
