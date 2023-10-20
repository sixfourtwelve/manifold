import { all, fork } from "redux-saga/effects";
import "./message";
import { handleMessage } from "./message";

export default function* root() {
  yield all([fork(handleMessage)]);
}
