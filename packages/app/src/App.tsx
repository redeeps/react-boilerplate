import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { MapStateToProps, connect } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import importedComponent from 'react-imported-component'

import { RootState } from './app.store'

import css from './App.css'

type StateProps = { title: string }

type Props = StateProps

const App: React.FC<Props> = ({ title = 'test' }) => {
  return (
    <div className={css.main}>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User module</Link>
          </li>
        </ul>
      </nav>
      <Route
        path="/user"
        component={() => {
          // this works better with HotModuleReloading
          const User = importedComponent(() =>
            import(/* webpackChunkName: "UserModule" */ '@red/user'),
          )
          return (
            <>
              <User title="User title" />
            </>
          )
        }}
      />
    </div>
  )
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootState> = (state) => ({
  title: state.app.title,
})

const AppConnect = connect(mapStateToProps)(App)

// @ts-ignore
AppConnect.id = 'AppComponent'

const HotApp = hot(AppConnect)

export { HotApp as App }
