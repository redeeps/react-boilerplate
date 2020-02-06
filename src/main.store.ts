import { Store, createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'

import { rootReducer as appReducer } from '@red/app/store'

type RootState = {}

export const rootReducer = combineReducers<RootState>({ ...appReducer })

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(routerMiddleware(history))

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>

  return store
}
