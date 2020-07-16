import { call, put, takeEvery } from 'redux-saga/effects'
import { episodeAPI } from '../../api'
import { episodesPageActions } from '../episodesPageReducer'

function * workerGetEpisode ({ payload: { episodeId } }) {
  const response = yield call(episodeAPI.getEpisode, episodeId)
  yield put(episodesPageActions.setLastEpisode(response.data.name))
}

export function * episodesSagas () {
  yield takeEvery(episodesPageActions.getEpisode, workerGetEpisode)
}
