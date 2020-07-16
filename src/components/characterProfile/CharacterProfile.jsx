import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { charactersPageActions } from '../../redux/charactersPageReducer'
import { selectCharacterProfile, selectIsFetching, selectLastEpisode } from '../../selectors'
import style from './CharacterProfile.module.scss'
import { episodesPageActions } from '../../redux/episodesPageReducer'
import { getId } from '../../api'
import { Preloader } from '../../preloader/Preloader'

export const CharacterProfile = () => {
  const dispatch = useDispatch()
  const match = useRouteMatch()
  const characterProfile = useSelector(selectCharacterProfile)
  const lastEpisode = useSelector(selectLastEpisode)
  const isFetching = useSelector(selectIsFetching)
  const characterId = match.params.characterId
  useEffect(() => {
    dispatch(charactersPageActions.getCharacter({ characterId }))
  }, [])
  if (!characterProfile) {
    return <Preloader/>
  }
  const { image, name, status, species, gender, origin, location, episode } = characterProfile
  const lastEpisodeURL = episode[episode.length - 1]
  const episodeId = Number(getId(lastEpisodeURL))
  dispatch(episodesPageActions.getEpisode({ episodeId }))
  return (
    <>
      <div>{isFetching ? <Preloader/> : null} </div>
      <div className={style.characterProfilePage}>
        <div>
          <img src={image} alt='character-photo'/>
        </div>
        <div className={style.characterInfo}>
          <div className={style.characterName}>
            <div>
              {name}
            </div>
            <span>{status} - {species}</span>
          </div>
          <div>
            <span>Gender:</span>
            <p>{gender}</p>
          </div>
          <div>
            <span>Origin location:</span>
            <p>{origin.name}</p>
          </div>
          <div>
            <span>Last known location:</span>
            <p>{location.name}</p>
          </div>
          <div>
            <span>Last episode:</span>
            <p>{lastEpisode}</p>
          </div>
        </div>
      </div>
    </>
  )
}
