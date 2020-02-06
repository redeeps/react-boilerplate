import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { RootState } from './app.store'
import { MapStateToProps, connect } from 'react-redux'
import css from './App.css'
import importedComponent from 'react-imported-component'

type StateProps = { title: string }

type Props = StateProps

const User = importedComponent(() => import(/* webpackChunkName:'UserModule' */ '@red/user'))

const App: React.FC<Props> = ({ title = 'test' }) => {
  return (
    <div className={css.main}>
      <h1>My app - {title}</h1>
      <div>
        <Link to="/test">Go to user module</Link>
      </div>
      <Route
        path="/test"
        component={() => (
          <>
            <User title="User title" />
          </>
        )}
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
