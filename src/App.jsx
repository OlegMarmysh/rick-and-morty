import React from 'react'
import style from './App.module.scss'
import { Characters } from './components/characters/Characters'
import { Switch, Route } from 'react-router-dom'
import { CharacterProfile } from './components/characterProfile/CharacterProfile'

export const App = () => {
  return (
    <div className={style.app}>
      <Switch>
        <Route exact path='/' component={Characters}/>
        <Route path='/characters' component={Characters}/>
        <Route path='/character/:characterId' component={CharacterProfile}/>
      </Switch>
    </div>
  )
}
