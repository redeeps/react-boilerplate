import { Reducer } from 'redux'

type AppState = {
  start: boolean
  title: string
}

export type RootState = {
  app: AppState
}

const initialState: AppState = {
  start: false,
  title: 'App title',
}

const appReducer: Reducer<AppState> = (state: AppState = initialState) => {
  if (state.start === false) {
    return {
      ...state,
      start: true,
    }
  }
  return state
}

export const rootReducer = { app: appReducer }
