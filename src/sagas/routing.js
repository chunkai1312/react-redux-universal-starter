import { takeEvery } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as actions from '../actions'

export function * locationChange (action) {
  const path = {
    '/': () => actions.setPageTitle('Home'),
    '/about': () => actions.setPageTitle('About')
  }
  yield put(path[action.payload.pathname]())
}

function * watchLocationChange (state) {
  yield * takeEvery(LOCATION_CHANGE, locationChange)
}

export default function * () {
  yield [
    fork(watchLocationChange)
  ]
}
