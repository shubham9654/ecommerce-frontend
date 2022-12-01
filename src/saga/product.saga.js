import { all, call, put, takeEvery } from "redux-saga/effects";
import { getProductService } from "../services/api/product.api";
import { getProducts, setProductAction } from "../store/actions/product.action";


function* getProductSaga() {
  try {
    const response = yield call(getProductService);
    yield put(setProductAction({ data: response?.data?.products || []}));
  } catch (err) {
    yield put(setProductAction({ data: [] }));
    console.log({ err });
  };
};

function* productSaga() {
  yield all([
    takeEvery(getProducts, getProductSaga)
  ])
}

export default productSaga;
