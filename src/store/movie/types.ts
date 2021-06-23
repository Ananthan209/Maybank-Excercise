import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./actionTypes"

export interface IMovie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface MovieState {
  pending: boolean
  movies: IMovie[]
  error: string | null
}

export interface FetchMovieSuccessPayload {
  movies: IMovie[]
}

export interface FetchMovieFailurePayload {
  error: string
}

export interface FetchMovieRequest {
  type: typeof FETCH_MOVIE_REQUEST
  payload: string
}

export type FetchMovieSuccess = {
  type: typeof FETCH_MOVIE_SUCCESS
  payload: FetchMovieSuccessPayload
}

export type FetchMovieFailure = {
  type: typeof FETCH_MOVIE_FAILURE
  payload: FetchMovieFailurePayload
}

export type MovieActions =
  | FetchMovieRequest
  | FetchMovieSuccess
  | FetchMovieFailure
