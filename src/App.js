import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './config/redux'
import { Main } from './components/main/Main'
import { ErrorView } from './components/common/ErrorView'
import '../src/styles/global-styles.css'

export const App = () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={ErrorView} />
      </Switch>
    </Router>
  </Provider>
