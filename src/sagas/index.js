import { fork } from 'redux-saga/effects'
import routing from './routing'
import layout from './layout'
import counter from './counter'

export default function * rootSaga () {
  yield [
    fork(routing),
    fork(layout),
    fork(counter)
  ]
}
