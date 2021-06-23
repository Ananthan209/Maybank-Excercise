import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_SUCCESS,
} from "./actionTypes"
import {
  FetchMovieRequest,
  FetchMovieSuccess,
  FetchMovieSuccessPayload,
  FetchMovieFailure,
  FetchMovieFailurePayload,
} from "./types"

export const fetchMovieRequest = (searchValue: any): FetchMovieRequest => ({
  type: FETCH_MOVIE_REQUEST,
  payload: searchValue,
})

export const fetchMovieSuccess = (
  payload: FetchMovieSuccessPayload
): FetchMovieSuccess => ({
  type: FETCH_MOVIE_SUCCESS,
  payload,
})

export const fetchMovieFailure = (
  payload: FetchMovieFailurePayload
): FetchMovieFailure => ({
  type: FETCH_MOVIE_FAILURE,
  payload,
})
