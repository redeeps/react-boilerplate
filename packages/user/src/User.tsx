import React from 'react'
import { hot } from 'react-hot-loader/root'

const User: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>User module</div>
    </div>
  )
}

const HotUser = hot(User)

export { HotUser as User }
