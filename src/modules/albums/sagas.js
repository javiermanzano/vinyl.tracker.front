import { takeLatest, call } from 'redux-saga/effects';

import {
  FETCH_ALBUMS,
} from './actionTypes';
import { fetchAlbums } from './api';

function* fetchAlbumsFromAPI() {
  try {
    yield call(fetchAlbums);
  } catch (e) {
    console.log({ e });
  }
}

export function* watchFetchAlbums() {
  yield takeLatest(FETCH_ALBUMS, fetchAlbumsFromAPI);
}
