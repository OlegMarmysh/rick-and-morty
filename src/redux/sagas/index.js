import { all, fork } from 'redux-saga/effects'
import { charactersSagas } from './charactersSagas'
import { episodesSagas } from './episodeSagas'

export const rootSaga = function * rootSaga () {
  yield all([
    fork(charactersSagas),
    fork(episodesSagas)
  ])
}
