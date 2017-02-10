import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, HomePage, AboutPage } from '../containers'

// const preload = promise => (nextState, replace, cb) => {
//   if (__SERVER__ || nextState.location.action === 'PUSH') {
//     promise().then(() => cb())
//   } else {
//     cb()
//   }
// }

export default store => {
  // const authPromise = () => store.dispatch(loadAuthIfNeeded())
  // const requireLogin = (nextState, replace, cb) => {
  //   const user = store.getState().async.user
  //   if (!user) {
  //     replace('/')
  //   }
  //   cb()
  // }
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Route>
  )
}
