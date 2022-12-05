import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import paymentSaga from './payment.saga';
import productSaga from "./product.saga"

export default function* rootSaga() {
  yield all([
    productSaga(),
    paymentSaga(),
    authSaga()
  ])
};
