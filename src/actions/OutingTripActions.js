import firebase from 'firebase';

import {
  DESCRIPTION_CAHNGED
  PHOTO_CHANGED
} from './types.js';

export const descriptionChanged = (text) => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: text
  };
};

export const photoChanged = (image) => {
  return {
    type: PHOTO_CHANGED,
    payload: image
  };
};
