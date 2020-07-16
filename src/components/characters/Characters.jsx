import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCharacters, selectPageNumber } from '../../selectors'
import { Character } from './Character'
import { charactersPageActions } from '../../redux/charactersPageReducer'
import style from './Characters.module.scss'

export const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector(selectCharacters)
  const pageNumber = useSelector(selectPageNumber)
  const getCharacter = () => {
    dispatch(charactersPageActions.getCharacters({ pageNumber }))
  }
  const usePrevValues = (value) => {
    const prevValues = useRef(value)

    useEffect(() => {
      prevValues.current = value
    }, [value])
    return prevValues.current
  }
  const prevCount = usePrevValues(pageNumber)
  useEffect(() => {
    if (pageNumber === 1) {
      getCharacter()
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    if (prevCount !== pageNumber) {
      getCharacter()
    }
  }, [pageNumber])
  const handleScroll = () => {
    const scrollBottom = document.documentElement.scrollHeight -
        window.pageYOffset < document.documentElement.clientHeight
    if (scrollBottom) {
      dispatch(charactersPageActions.setPageNumber())
    }
  }
  return (
    <div className={style.charactersPage}>
      {characters.map(character => <Character key={character.id} {...character}/>)}
    </div>
  )
}
