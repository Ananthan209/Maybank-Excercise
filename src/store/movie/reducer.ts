import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./actionTypes";

import { MovieActions, MovieState } from "./types";

const initialState: MovieState = {
  pending: false,
  movies: [],
  error: null,
};

const reducer = (state = initialState, action: MovieActions) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.payload.movies,
        error: null,
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        pending: false,
        movies: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
