import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/root.reducer';
import rootSaga from '../saga/root.saga';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export default store;
export { persistor }