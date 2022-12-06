import { all, call, put, takeEvery } from "redux-saga/effects";
import { createPaymentService } from "../services/api/payment.api";
import { createPayment } from "../store/actions/payment.action";

function* createPaymentSaga({ payload, callback }) {
  try {
    const response = yield call(createPaymentService, payload);
    window.location.href = response.data.url
  } catch (err) {
    if (err.response.status === 401 || err.response.status === 403) {
      yield call(callback)
    } else {
      console.log(err, err.response);
    }
  };
};

function* paymentSaga() {
  yield all([
    takeEvery(createPayment, createPaymentSaga),
  ])
}

export default paymentSaga;