import { fork } from 'redux-saga/effects'
import { watchLocationChange } from './routing'
import { watchClickMenuItem } from './layout'
import { watchIncrementAsync } from './counter'

export default function * rootSaga () {
  yield [
    fork(watchLocationChange),
    fork(watchClickMenuItem),
    fork(watchIncrementAsync)
  ]
}
