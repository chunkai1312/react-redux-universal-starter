import { fork } from 'redux-saga/effects'
import routing from './routing'
import appLayout from './appLayout'
import counter from './counter'

export default function * rootSaga () {
  yield [
    fork(routing),
    fork(appLayout),
    fork(counter)
  ]
}
