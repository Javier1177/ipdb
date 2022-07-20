import { all, call } from 'redux-saga/effects';

import { detailsSaga } from './details/details.saga';

export function* rootSaga() {
  yield all([call(detailsSaga)]);
}
