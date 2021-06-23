import { isEmpty } from "lodash"
import { IMovie } from "store/movie/types"
import { useSelector } from "react-redux"
import {
  getPendingSelector,
  getMoviesSelector,
  getErrorSelector,
} from "./../store/movie/selectors"

const MovieList = (): JSX.Element => {
  const pending = useSelector(getPendingSelector)
  const movies = useSelector(getMoviesSelector)
  const error = useSelector(getErrorSelector)
  return (
    <>
      {pending ? (
        <div className="no-movie">Loading...</div>
      ) : error ? (
        <div className="no-movie">Error</div>
      ) : isEmpty(movies) ? (
        <div className="no-movie">No movies found..</div>
      ) : (
        <div className="flex-container">
          {movies?.map((movie: IMovie, index: number) => (
            <div style={{ marginBottom: "10px" }} key={movie?.imdbID}>
              <img className="img" src={movie?.Poster} alt="" />
              <div className="text">
                {movie?.Title} : {movie?.Year}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default MovieList
