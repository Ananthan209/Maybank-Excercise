import { AxiosResponse } from "axios"
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects"

import { fetchMovieFailure, fetchMovieSuccess } from "./actions"
import { FETCH_MOVIE_REQUEST } from "./actionTypes"
import {
  FetchMovieFailure,
  FetchMovieRequest,
  FetchMovieSuccess,
  IMovie,
} from "./types"
import moviesClient from "./../../services"

/* Worker Saga: Fired on FETCH_MOVIE_REQUEST action */
function* fetchMovieSaga(
  action: FetchMovieRequest
): Generator<
  | CallEffect<AxiosResponse<IMovie[]>>
  | PutEffect<FetchMovieSuccess>
  | PutEffect<FetchMovieFailure>,
  void,
  any
> {
  try {
    const response = yield call(moviesClient.fetch, action.payload)
    yield put(
      fetchMovieSuccess({
        movies: response.Search,
      })
    )
  } catch (e) {
    yield put(
      fetchMovieFailure({
        error: e.message,
      })
    )
  }
}

/* Starts worker saga on latest dispatched `FETCH_MOVIE_REQUEST` action. */
function* movieSaga() {
  yield all([takeLatest(FETCH_MOVIE_REQUEST, fetchMovieSaga)])
}

export default movieSaga
