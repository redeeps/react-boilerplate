import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router'

import { configureStore, App } from '@red/app'

// prepare store
const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" render={() => <App />} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
