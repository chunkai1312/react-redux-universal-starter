import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'
import { fork, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

export function * backToHome (action) {
  yield put(push('/'))
}

export function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(push(menuItem.path))
}

function * watchBackToHome () {
  yield * takeEvery(types.BACK_TO_HOME, backToHome)
}

function * watchClickMenuItem () {
  yield * takeEvery(types.CLICK_MENU_ITEM, clickMenuItem)
}

export default function * () {
  yield [
    fork(watchBackToHome),
    fork(watchClickMenuItem)
  ]
}
