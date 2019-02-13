import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  CREATE_FAIL,
  CONFIRM_PASSWORD_CHANGED
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
  fName: '',
  lName: '',

 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log(action.payload)
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log(action.payload)
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    case CREATE_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_FAIL:
      return{ ...state, error: action.payload }
    default:
      return state;
  }
};
