import { takeEvery, delay } from 'redux-saga'
import { fork, put, call } from 'redux-saga/effects'
import * as actions from '../actions/counter'
import * as types from '../constants/actionTypes'

export function * incrementAsync () {
  yield call(delay, 1000)
  yield put(actions.increment())
}

function * watchIncrementAsync () {
  yield * takeEvery(types.INCREMENT_ASYNC, incrementAsync)
}

export default function * () {
  yield [
    fork(watchIncrementAsync)
  ]
}
