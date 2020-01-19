import { Store, createStore, applyMiddleware, combineReducers, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'

type AppState = {
  start: boolean
}

const initialState: AppState = {
  start: false,
}

type AppReducer = Reducer<AppState>

type RootState = {
  app: AppReducer
}

const appReducer = (state: AppState = initialState) => {
  if (state.start === false) {
    return {
      start: true,
    }
  }
  return state
}

export const rootReducer = combineReducers<RootState>({
  app: appReducer,
})

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(routerMiddleware(history))

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
