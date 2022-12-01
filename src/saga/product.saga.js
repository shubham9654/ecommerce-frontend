import { all, call, put, takeEvery } from "redux-saga/effects";
import { getProducts } from "../services/api/product.api";
import { setProducts } from "../store/actions/product.action";


function* getProductSaga(data) {
  try {
    const response = yield call(getProducts);
    yield put(setProducts(response));
    yield data.callback()
  } catch (err) {
    console.log(err);
  };
};

function* productSaga() {
  yield all([
    takeEvery(getProducts, getProductSaga)
  ])
}

export default productSaga;
