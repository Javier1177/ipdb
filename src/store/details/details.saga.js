import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  fetchDetailsSuccess,
  fetchDetailsFailed,
  fetchDetailsStart,
} from './details.slice';

import FETCH_LOGIC from '../../logic';

export function* fetchDetailsAsync({ payload }) {
  try {
    const pokemonDetails = yield call(FETCH_LOGIC.fetchPokemonDetails, payload);
    yield put(fetchDetailsSuccess(pokemonDetails));
  } catch (error) {
    yield put(fetchDetailsFailed(error));
  }
}

export function* onFetchDetails() {
  yield takeLatest(fetchDetailsStart.type, fetchDetailsAsync);
}

export function* detailsSaga() {
  yield all([call(onFetchDetails)]);
}
