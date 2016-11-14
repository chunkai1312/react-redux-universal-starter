import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/counter'
import { COUNTER_INCREMENT_ASYNC } from '../constants/ActionTypes'

function * incrementAsync () {
  yield call(delay, 1000)
  yield put(actions.increment())
}

export function * watchIncrementAsync () {
  yield * takeEvery(COUNTER_INCREMENT_ASYNC, incrementAsync)
}
