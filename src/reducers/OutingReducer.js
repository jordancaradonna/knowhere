import {
  DESCRIPTION_CHANGED,
  OUTING_PHOTO_CHANGED,
  LOCATION_CHANGED,
  PRIVACY_CHANGED,
  CREATE_OUTING,
  CREATE_OUTING_FAIL,
  CREATE_OUTING_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  outingPhoto: '',
  description: '',
  location: '',
  people: null,
  privacy: false,
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      console.log(action.payload);
      return { ...state, description: action.payload };
    case OUTING_PHOTO_CHANGED:
      console.log(action.payload);
      return { ...state, outingPhoto: action.payload };
    case LOCATION_CHANGED:
      console.log(action.payload);
      return { ...state, location: action.payload };
    case PRIVACY_CHANGED:
      console.log(action.payload);
      return { ...state, privacy: action.payload };
    case CREATE_OUTING:
      console.log('creating');
      return { ...state, loading: true, error: '' };
    case CREATE_OUTING_SUCCESS:
      return { ...state, ...INITIAL_STATE, };
    case CREATE_OUTING_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
