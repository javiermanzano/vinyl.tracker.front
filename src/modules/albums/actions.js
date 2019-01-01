import { createActions } from 'redux-actions';

import {
  FETCH_ALBUMS,
  SET_ALBUMS,
} from './actionTypes';

export const {
  fetchAlbums,
  setAlbums,
} = createActions(
  FETCH_ALBUMS,
  SET_ALBUMS,
);
