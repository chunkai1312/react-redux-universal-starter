import { takeEvery } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import { push, goBack } from 'react-router-redux'
import * as types from '../constants/ActionTypes'

export function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(push(menuItem.path))
}

export function * clickBackButton (action) {
  yield put(goBack())
}

export function * backToHome (action) {
  yield put(push('/'))
}

function * watchClickMenuItem () {
  yield * takeEvery(types.CLICK_MENU_ITEM, clickMenuItem)
}

function * watchClickBackButton () {
  yield * takeEvery(types.CLICK_BACK_BUTTON, clickBackButton)
}

function * watchBackToHome () {
  yield * takeEvery(types.BACK_TO_HOME, backToHome)
}

export default function * () {
  yield [
    fork(watchClickMenuItem),
    fork(watchClickBackButton),
    fork(watchBackToHome)
  ]
}
