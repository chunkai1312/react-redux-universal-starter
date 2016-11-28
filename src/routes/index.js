import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
)
