import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/about" component={AboutView} />
  </Route>
)
