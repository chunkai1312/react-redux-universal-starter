import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/counter'
import * as types from '../constants/actionTypes'

function * incrementAsync () {
  yield call(delay, 1000)
  yield put(actions.increment())
}

export function * watchIncrementAsync () {
  yield * takeEvery(types.COUNTER_INCREMENT_ASYNC, incrementAsync)
}
