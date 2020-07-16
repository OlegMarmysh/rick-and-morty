import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { charactersPageReducer } from './charactersPageReducer'
import { rootSaga } from './sagas'
import { episodesPageReducer } from './episodesPageReducer'

const reducer = {
  charactersPage: charactersPageReducer,
  episodesPage: episodesPageReducer
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const store = configureStore({
  reducer,
  middleware
})

sagaMiddleware.run(rootSaga)
