import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'
import { put } from 'redux-saga/effects'
import { actionTypes as types } from '../modules/layout'

function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(push(menuItem.path))
}

export function * watchClickMenuItem () {
  yield * takeEvery(types.CLICK_MENU_ITEM, clickMenuItem)
}
