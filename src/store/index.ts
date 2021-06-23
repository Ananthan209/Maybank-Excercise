import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import { routerMiddleware } from "connected-react-router"
import rootReducer, { history } from "./rootReducer"
import { rootSaga } from "./rootSaga"

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
const store = createStore(
  rootReducer,
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
)

// Run the saga
sagaMiddleware.run(rootSaga)

export default store
