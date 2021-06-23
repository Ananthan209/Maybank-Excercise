import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.movie.pending;

const getMovies = (state: AppState) => state.movie.movies;

const getError = (state: AppState) => state.movie.error;

export const getMoviesSelector = createSelector(getMovies, (movies) => movies);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
