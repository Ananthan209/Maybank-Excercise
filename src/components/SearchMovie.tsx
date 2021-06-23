import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMovieRequest } from "./../store/movie/actions"
import { debounce } from "lodash"

const SearchMovie = (): JSX.Element => {
  const dispatch = useDispatch()

  // Load initial movies
  useEffect(() => {
    dispatch(fetchMovieRequest(null))
  }, [dispatch])

  // Load movie based on user input using debouncing method
  const handleChange = (event: any) => {
    dispatch(fetchMovieRequest(event.target.value))
  }

  return (
    <input
      className="input"
      placeholder="Search for a movie"
      onChange={debounce(handleChange, 500)}
    />
  )
}

export default SearchMovie
