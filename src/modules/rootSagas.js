import { all } from 'redux-saga/effects';

import { watchFetchAlbums } from './albums/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchAlbums,
  ]);
}
