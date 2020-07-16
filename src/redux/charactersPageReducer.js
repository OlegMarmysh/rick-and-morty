import { createSlice } from '@reduxjs/toolkit'
import { getId } from '../api'

const initialState = {
  characters: [],
  characterProfile: null,
  nextCharacterURL: '',
  pageNumber: 1,
  isFetching: false
}

const charactersPageSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters (state, action) {
      return {
        ...state,
        characters: [...state.characters, ...action.payload]
      }
    },
    setCharacterProfile (state, action) {
      return {
        ...state,
        characterProfile: action.payload
      }
    },
    setNextCharacterURL (state, action) {
      return {
        ...state,
        nextCharacterURL: action.payload
      }
    },
    setIsFetching (state, action) {
      return {
        ...state,
        isFetching: action.payload
      }
    },
    setPageNumber (state, action) {
      if (state.nextCharacterURL) {
        return {
          ...state,
          pageNumber: Number(getId(state.nextCharacterURL))
        }
      }
    },
    getCharacters (number) {},
    getCharacter (id) {}
  }
})

export const charactersPageActions = charactersPageSlice.actions
export const charactersPageReducer = charactersPageSlice.reducer
