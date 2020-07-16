import React from 'react'
import style from './Character.module.scss'
import { NavLink } from 'react-router-dom'

export const Character = ({ id, image, name, status, species, gender, origin }) => {
  return (
    <div className={style.characterPage}>
      <div>
        <img src={image} alt='character-photo'/>
      </div>
      <div className={style.characterInfo}>
        <div className={style.characterName}>
          <div>
            <NavLink to={`/character/${id}`}>{name}</NavLink>
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
      </div>
    </div>
  )
}
