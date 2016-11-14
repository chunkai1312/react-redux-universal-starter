import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as actions from '../actions'

function * locationChange (action) {
  const path = {
    '/': () => actions.setPageTitle('Home'),
    '/about': () => actions.setPageTitle('About')
  }
  yield put(path[action.payload.pathname]())
}

export function * watchLocationChange (state) {
  yield * takeEvery(LOCATION_CHANGE, locationChange)
}
