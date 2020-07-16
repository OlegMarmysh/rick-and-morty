import { createSelector } from 'reselect'

export const selectCharacters = createSelector(
  state => state.charactersPage.characters,
  characters => characters
)

export const selectPageNumber = createSelector(
  state => state.charactersPage.pageNumber,
  pageNumber => pageNumber
)

export const selectCharacterProfile = createSelector(
  state => state.charactersPage.characterProfile,
  characterProfile => characterProfile
)

export const selectLastEpisode = createSelector(
  state => state.episodesPage.lastEpisode,
  lastEpisode => lastEpisode
)

export const selectIsFetching = createSelector(
  state => state.charactersPage.isFetching,
  isFetching => isFetching
)
