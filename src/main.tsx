///<reference types="webpack-env" />
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router'
import importedComponent from 'react-imported-component'

import { configureStore } from './main.store'

// prepare store
const history = createBrowserHistory()
const store = configureStore(history)
const App = importedComponent(() => import('@red/app'))
const Loading: React.FC = () => <div>Wczytywanie...</div>
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Loading />}>
            <Route path="/" render={() => <App />} />
          </Suspense>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept(() => {
    render()
  })
}
