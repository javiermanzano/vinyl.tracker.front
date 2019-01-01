import { handleActions } from 'redux-actions';

import {
  setAlbums,
} from './actions';

const defaultState = {
  list: [],
};

export default handleActions(
  {
    [setAlbums]: (state, action) => ({
      ...state,
      list: action.payload.albums,
    }),
  },
  defaultState,
);
