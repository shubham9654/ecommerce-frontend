import { all } from 'redux-saga/effects';
import paymentSaga from './payment.saga';
import productSaga from "./product.saga"

export default function* rootSaga() {
  yield all([
    productSaga(),
    paymentSaga()
  ])
};
