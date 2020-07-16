import React from 'react'
import preloader from '../images/reload.svg'
import style from './Preloader.module.scss'

export const Preloader = () => {
  return (
    <div className={style.wrapper}>
      <img src={preloader}/>
    </div>
  )
}
