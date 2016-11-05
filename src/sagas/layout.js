import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'
import { put } from 'redux-saga/effects'
import { CLICK_MENU_ITEM } from '../constants/ActionTypes'

function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(push(menuItem.path))
}

export function * watchClickMenuItem () {
  yield * takeEvery(CLICK_MENU_ITEM, clickMenuItem)
}
