import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootSaga } from './root-saga';

import detailsSlice from './details/details.slice';
import suggestionSlice from './suggestion/suggestion';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: {
    pokemonDetails: detailsSlice,
    suggested: suggestionSlice,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
