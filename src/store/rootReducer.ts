import { combineReducers } from "redux"
import { createBrowserHistory } from "history"
import { connectRouter } from "connected-react-router"
import movieReducer from "./movie/reducer"

// Create History
export const history = createBrowserHistory()

const rootReducer = combineReducers({
  movie: movieReducer,
  router: connectRouter(history),
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
