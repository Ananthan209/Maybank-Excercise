import { all, fork } from "redux-saga/effects";

import movieSaga from "./movie/sagas";

export function* rootSaga() {
  yield all([fork(movieSaga)]);
}
