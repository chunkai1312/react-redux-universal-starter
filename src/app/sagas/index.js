import { fork } from 'redux-saga/effects'
import { watchClickMenuItem } from './layout'
import { watchIncrementAsync } from './counter'

export default function * rootSaga () {
  yield [
    fork(watchClickMenuItem),
    fork(watchIncrementAsync)
  ]
}
