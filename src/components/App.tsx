import MovieList from "./MovieList"
import SearchMovie from "./SearchMovie"

const App = (): JSX.Element => {
  return (
    <div className="movie">
      <h1>Movie Search</h1>
      <SearchMovie />
      <MovieList />
    </div>
  )
}

export default App
