import { takeEvery } from 'redux-saga'
import { push } from 'react-router-redux'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/layout'
import { CLICK_MENU_ITEM } from '../constants/ActionTypes'

function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(push(menuItem.path))
  yield put(actions.setPageTitle(menuItem.name))
}

export function * watchClickMenuItem () {
  yield * takeEvery(CLICK_MENU_ITEM, clickMenuItem)
}
