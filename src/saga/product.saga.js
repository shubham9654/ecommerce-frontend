import { all, call, put, takeEvery } from "redux-saga/effects";
import { getAllProductService, getSingleProductService } from "../services/api/product.api";
import { getAllProducts, getSingleProduct, setAllProductAction, setSingleProductAction } from "../store/actions/product.action";


function* getSingleProductSaga({ payload }) {
  try {
    const response = yield call(getSingleProductService, payload);
    yield put(setSingleProductAction({ data: response?.data?.product || {}}));
  } catch (err) {
    yield put(setSingleProductAction({ data: {} }));
    console.log({ err });
  };
};

function* getAllProductSaga({ payload }) {
  try {
    const response = yield call(getAllProductService, payload);
    yield put(setAllProductAction({ data: response?.data?.products || []}));
  } catch (err) {
    yield put(setAllProductAction({ data: [] }));
    console.log({ err });
  };
};

function* productSaga() {
  yield all([
    takeEvery(getSingleProduct, getSingleProductSaga),
    takeEvery(getAllProducts, getAllProductSaga)
  ])
}

export default productSaga;
