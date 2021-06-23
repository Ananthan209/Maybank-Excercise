import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "./index.css"
import store from "./store"
import { history } from "./store/rootReducer"
import App from "./components/App"
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
