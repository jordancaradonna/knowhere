const INITIAL_STATE = {
  photo: '',
  description: '',
  location: '...',
  people: null,
  private: true,
  user: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, fname: action.payload };
    case PHOTO_CHANGED:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};
