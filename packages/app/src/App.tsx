import React from 'react'
import { Route } from 'react-router'

import { User } from '@red/user'

import css from './App.css'

export const App: React.FC = () => {
  return (
    <div className={css.main}>
      <h1>App</h1>
      <Route path="/test" component={User} />
    </div>
  )
}
