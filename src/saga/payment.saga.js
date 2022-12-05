import { all, call, takeEvery } from "redux-saga/effects";
import { createPaymentService } from "../services/api/payment.api";
import { createPayment } from "../store/actions/payment.action";

function* createPaymentSaga({ payload }) {
  try {
    const response = yield call(createPaymentService, payload);
    window.location.href = response.data.url
  } catch (err) {
    console.log({ err });
  };
};

function* paymentSaga() {
  yield all([
    takeEvery(createPayment, createPaymentSaga),
  ])
}

export default paymentSaga;