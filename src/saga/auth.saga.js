import { all, call, put, takeEvery } from "redux-saga/effects";
import { createUserService } from "../services/api/auth.api";
import { createUser } from "../store/actions/auth.action";


function* createUserSaga({ payload, callback }) {
  try {
    yield call(createUserService, payload);
    yield call(callback, { status: 200 })
  } catch (err) {
    const { wrongValue, msg} = err.response.data
    if (err.response.status === 403 && wrongValue) {
      yield call(callback, { status: 403, value: wrongValue, msg: msg })
    } else {
      console.log(err)
    }
  };
};

function* authSaga() {
  yield all([
    takeEvery(createUser, createUserSaga),
  ])
}

export default authSaga;
