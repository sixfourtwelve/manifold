import { createAction } from "@reduxjs/toolkit";
import { put, select, takeLatest } from "redux-saga/effects";
import { helloMessageSelector, isMessageUpper } from "../../selectors/hello";
import { upperCaseMessage } from "../redux/hello";
import { HELLO_PATH } from "./slicePaths";

export function* helloSaga() {
  const isUpper: boolean = yield select(isMessageUpper);

  if (!isUpper) {
    yield put(upperCaseMessage());
  }
}

export const hello = createAction(`${HELLO_PATH}helloSaga`);

export function* handleHello() {
  yield takeLatest(hello.type, helloSaga);
}
