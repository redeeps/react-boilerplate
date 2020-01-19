import React from 'react'
import { Route } from 'react-router'

import { User } from '@red/user'

export const App: React.FC = () => {
  return (
    <div>
      <h1>App</h1>
      <Route path="/test" component={User} />
    </div>
  )
}
