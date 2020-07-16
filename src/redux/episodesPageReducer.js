import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastEpisode: ''
}

const episodesPageSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setLastEpisode (state, action) {
      return {
        ...state,
        lastEpisode: action.payload
      }
    },
    getEpisode (id) {}
  }
})

export const episodesPageActions = episodesPageSlice.actions
export const episodesPageReducer = episodesPageSlice.reducer
