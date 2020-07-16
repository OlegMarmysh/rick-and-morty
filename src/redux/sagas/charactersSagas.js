import { call, put, takeEvery } from 'redux-saga/effects'
import { charactersAPI } from '../../api'
import { charactersPageActions } from '../charactersPageReducer'

function * workerGetCharacters ({ payload: { pageNumber } }) {
  const response = yield call(charactersAPI.getCharacters, pageNumber)
  yield put(charactersPageActions.setNextCharacterURL(response.data.info.next))
  yield put(charactersPageActions.setCharacters(response.data.results))
}

function * workerGetCharacter ({ payload: { characterId } }) {
  yield put(charactersPageActions.setIsFetching(true))
  const response = yield call(charactersAPI.getCharacter, characterId)
  yield put(charactersPageActions.setIsFetching(false))
  yield put(charactersPageActions.setCharacterProfile(response.data))
}

export function * charactersSagas () {
  yield takeEvery(charactersPageActions.getCharacters, workerGetCharacters)
  yield takeEvery(charactersPageActions.getCharacter, workerGetCharacter)
}
