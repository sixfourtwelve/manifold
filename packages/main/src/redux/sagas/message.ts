import { createAction } from "@reduxjs/toolkit";
import { put, select, takeLatest } from "redux-saga/effects";
import { isMessageUpper } from "../selectors/message";
import { upperCaseMessage } from "../reducers/message";
import { MESSAGE_ACTION } from "./actionTypes";

export function* messageUpdateSaga() {
  const isUpper: boolean = yield select(isMessageUpper);

  if (!isUpper) {
    yield put(upperCaseMessage());
  }
}

export const messageUpdate = createAction(`${MESSAGE_ACTION}messageUpdateSaga`);

export function* handleMessage() {
  yield takeLatest(messageUpdate.type, messageUpdateSaga);
}
